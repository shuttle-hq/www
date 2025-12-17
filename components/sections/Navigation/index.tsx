"use client";

import clsx from "clsx";
import CustomButton from "../../elements/CustomButton";
import { GithubLogo, Hamburger, Logo } from "components/svgs";
// import { Github, Discord } from "components/svgs";
import { trackEvent } from "lib/posthog";
import dynamic from "next/dynamic";
import Link from "components/elements/Link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { DiscordLogo } from "components/svgs/DiscordLogo";
import { useStargazersCount } from "hooks/useStargazersCount";
import { formatNumberToK } from "lib/helpers";

const ThemeSwitcher = dynamic(() => import("./ThemeSwitcher"), { ssr: false });

const LinkItem = ({
  event,
  href,
  text,
  active,
  setOpen,
}: {
  event: string;
  href: string;
  text: string;
  active: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex">
      <div className="relative">
        <Link
          className={clsx(
            "nav-link-shadow transition-all dark:hover:text-white",
            active && "font-bold text-white",
          )}
          href={href}
          eventName={event}
          onClick={({ ctrlKey, metaKey }) => {
            setOpen(ctrlKey || metaKey);
          }}
        >
          {text}
        </Link>
      </div>
    </div>
  );
};

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const { count: stargazersCount } = useStargazersCount();

  useEffect(() => {
    function updateMenu() {
      const isMobileAndOpen = window.innerWidth < 1280 && open;
      const isDesktopAndClosed = window.innerWidth >= 1280 && !open;

      if (isMobileAndOpen || isDesktopAndClosed) return;

      setOpen(false);
    }

    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }

    window.addEventListener("resize", updateMenu);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", updateMenu);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open]);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 w-full backdrop-blur-md transition-all duration-300",
        scrolled
          ? "bg-[#E9E9E9]/60 dark:bg-black/60"
          : "bg-[#E9E9E9] dark:bg-black",
      )}
    >
      <nav
        className={clsx(
          "mx-auto flex w-full max-w-[1344px] items-center px-5 transition-all duration-300 sm:px-10",
          scrolled ? "h-16" : "h-[5.5rem]",
        )}
      >
        <Link
          href="/"
          onClick={() => {
            setOpen(false);
          }}
        >
          <Logo className="dark:text-head" />
        </Link>
        <div
          className={clsx(
            "absolute left-0 top-[4.375rem] z-20 h-[calc(100vh-4.375rem)] w-full overflow-y-auto bg-[#E9E9E9] p-5 dark:bg-black sm:px-10 xl:static xl:ml-10 xl:flex xl:h-auto xl:items-center xl:overflow-y-visible xl:bg-transparent xl:p-0 xl:dark:bg-transparent",
            !open && "hidden",
          )}
        >
          <div className="flex flex-col gap-4 xl:flex-row xl:gap-8">
            {[
              // {
              // 	href: '/cch',
              // 	event: 'homepage_mainnav_cch',
              // 	text: 'Christmas Code Hunt',
              // },
              {
                href: "/blog/tags/all",
                event: "homepage_mainnav_blog",
                text: "Blog",
                keyword: "blog",
              },
              {
                href: "https://docs.shuttle.dev",
                event: "homepage_mainnav_docs",
                text: "Docs",
                keyword: "docs",
              },
              {
                href: "/customers",
                event: "homepage_mainnav_customers",
                text: "Customers",
                keyword: "customers",
              },
            ].map(({ event, href, text, keyword }) => (
              <LinkItem
                key={href}
                event={event}
                href={href}
                text={text}
                setOpen={setOpen}
                active={router.pathname.includes(keyword)}
              />
            ))}
          </div>
          <div className="mt-10 xl:ml-auto xl:mt-0 xl:flex xl:items-center xl:gap-5">
            <div className="flex items-center gap-4 pl-px xl:ml-4">
              {[
                {
                  icon: <GithubLogo className="w-6 h-6" />,
                  href: "https://github.com/shuttle-hq/shuttle",
                  text: `${stargazersCount !== null ? formatNumberToK(stargazersCount) : ""}`,
                  title: `${stargazersCount ?? "N/A"} GitHub stars`,
                  trackingEvent: "homepage_mainnav_github",
                  label: "GitHub",
                },
                {
                  icon: <DiscordLogo className="w-6 h-6" />,
                  href: "https://discord.com/invite/shuttle",
                  text: "",
                  title: "Join us on Discord",
                  trackingEvent: "homepage_mainnav_discord",
                  label: "Discord",
                },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  title={item.title}
                  onClick={() => trackEvent(item.trackingEvent)}
                  className={`gap-1 transition-colors text-[#D8D8D8] hover:text-black dark:text-white/60 dark:hover:text-white bg-[#1D1D1D] flex items-center justify-center rounded-full h-[48px] ${item.text ? " px-3" : "w-[48px]"}`}
                >
                  {item.icon}
                  {item.text && <span className="text-xs">{item.text}</span>}
                </a>
              ))}
            </div>
            <div
              className="mt-10 flex flex-wrap items-center gap-5 xl:mt-0"
              onClick={() => {
                trackEvent("homepage_mainnav_login");
              }}
            >
              <CustomButton
                className="w-[140px] justify-center"
                variant="secondary"
                invertOnDark
                href="https://console.shuttle.dev/"
              >
                Log in
              </CustomButton>
            </div>
            <ThemeSwitcher className="mt-5 xl:-order-1 xl:mt-0" hidden />
          </div>
        </div>

        <button
          className="ml-auto dark:text-head xl:hidden"
          onClick={() => setOpen((open) => !open)}
        >
          <Hamburger />
        </button>
      </nav>
    </header>
  );
};

export default Navigation;
