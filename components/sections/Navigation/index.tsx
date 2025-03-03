import clsx from "clsx";
import { Button, LoginButton } from "components/elements";
import { Hamburger, Logo } from "components/svgs";
import { trackEvent } from "lib/posthog";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import { useLayoutEffect, useState } from "react";
import { DISCORD_URL } from "../../../lib/constants";

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
          onClick={({ ctrlKey, metaKey }) => {
            trackEvent(event);
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
  const router = useRouter();
  useLayoutEffect(() => {
    function updateMenu() {
      const isMobileAndOpen = window.innerWidth < 1280 && open;
      const isDesktopAndClosed = window.innerWidth >= 1280 && !open;

      if (isMobileAndOpen || isDesktopAndClosed) return;

      setOpen(false);
    }

    window.addEventListener("resize", updateMenu);

    return () => window.removeEventListener("resize", updateMenu);
  }, [open]);

  return (
    <nav className="mx-auto flex h-[5.5rem] w-full max-w-[1344px] items-center px-5 sm:px-10">
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
              href: "/pricing",
              event: "homepage_mainnav_pricing",
              text: "Pricing",
              keyword: "pricing",
            },
            {
              href: "https://docs.shuttle.dev",
              event: "homepage_mainnav_docs",
              text: "Docs",
              keyword: "docs",
            },
            {
              href: "/ai",
              event: "homepage_mainnav_ai",
              text: "Shuttle AI",
              keyword: "ai",
            },
            {
              href: "/careers",
              event: "homepage_careers",
              text: "Careers",
              keyword: "careers",
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
          <div className="mt-10 flex flex-wrap items-center gap-5 xl:mt-0">
            <Button
              variant="secondary"
              invertOnDark
              href={DISCORD_URL}
              onClick={() => {
                trackEvent("homepage_mainnav_discord");
              }}
            >
              Join Discord
            </Button>
            <div
              onClick={() => {
                trackEvent("homepage_mainnav_login");
              }}
            >
              <LoginButton variant="primary" invertOnDark>
                Log in
              </LoginButton>
            </div>
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
  );
};

export default Navigation;
