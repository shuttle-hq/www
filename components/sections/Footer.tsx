import clsx from "clsx";
import { YCombinator } from "components/svgs";
import { trackEvent } from "lib/posthog";
import Image from "next/image";
import Link from "components/elements/Link";
import { FC } from "react";

interface FooterProps {
  disableMargin?: boolean;
}

const SHUTTLE_LINKS = [
  { key: "features", name: "Features", href: "/#features" },
  { key: "starters", name: "Starters", href: "/starters" },
  {
    key: "templates",
    name: "Templates",
    href: "https://console.shuttle.dev/templates",
  },
  {
    key: "releases",
    name: "Releases",
    href: "https://github.com/shuttle-hq/shuttle/releases",
  },
];

const COMPANY_LINKS = [
  { key: "about", name: "About", href: "/about" },
  { key: "contact", name: "Contact", href: "/contact" },
  { key: "careers", name: "Careers", href: "/about#careers" },
  { key: "terms", name: "Terms of Service", href: "/terms" },
  { key: "privacy", name: "Privacy Policy", href: "/privacy" },
  {
    key: "acceptable-use",
    name: "Acceptable Use Policy",
    href: "/acceptable-use",
  },
  { key: "cookies", name: "Cookie Policy", href: "/cookies" },
  { key: "dpa", name: "Data Processing Addendum", href: "/dpa" },
];

const DEVELOPERS_LINKS = [
  { key: "docs", href: "https://docs.shuttle.dev", name: "Docs" },
  {
    key: "guides",
    href: "https://docs.shuttle.dev/examples/axum",
    name: "Guides",
  },
  {
    key: "examples",
    href: "https://docs.shuttle.dev/examples/axum",
    name: "Examples",
  },
  { key: "heroes", href: "/shuttle-heroes", name: "Shuttle Heroes" },
  { key: "customers", href: "/customers", name: "Customers" },
  { key: "launchpad", href: "/launchpad", name: "Launchpad" },
  { key: "codehunt", href: "/cch", name: "Code Hunt" },
];

const COMMUNITY_LINKS = [
  {
    key: "gitHub",
    name: "GitHub",
    href: "https://github.com/shuttle-hq/shuttle",
  },
  {
    key: "discord",
    name: "Discord",
    href: "https://discord.com/invite/shuttle",
  },
  { key: "twitter", name: "Twitter", href: "https://twitter.com/shuttle_dev" },
  {
    key: "linkedIn",
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/shuttle-yc",
  },
];

const Footer: FC<FooterProps> = ({ disableMargin }) => {
  return (
    <footer
      className={clsx(
        !disableMargin && "mt-28",
        "border-t border-black/10 dark:border-white/10",
      )}
    >
      <div className="relative mx-auto max-w-[1328px]">
        <div className="absolute left-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 transform overflow-hidden rounded-2xl border border-black/10 dark:border-white/10">
          <Image src="/images/sections/footer/rocket.gif" alt="rocket" fill />
        </div>
        <div className="divide-y divide-black/10 dark:divide-white/10 lg:grid lg:grid-cols-2 lg:divide-x lg:divide-y-0">
          <div className="grid grid-cols-2 divide-x divide-black/10 text-xl dark:divide-white/10">
            <div className="flex flex-col gap-3 px-8 pb-8 pt-16 lg:p-16">
              <h3 className="font-gradual font-bold text-black text-head">
                Shuttle
              </h3>
              {SHUTTLE_LINKS.map(({ key, name, href }) => (
                <Link
                  key={key}
                  href={href}
                  className="text-body transition duration-300 hover:text-black dark:hover:text-head"
                  eventName={`homepage_footer_site_${key}`}
                >
                  {name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3 px-8 pb-8 pt-16 lg:p-16">
              <h3 className="font-gradual font-bold text-black text-head">
                Company
              </h3>
              {COMPANY_LINKS.map(({ key, name, href }) => (
                <Link
                  key={key}
                  href={href}
                  className="text-body transition duration-300 hover:text-black dark:hover:text-head"
                  eventName={`homepage_footer_site_${key}`}
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 divide-x divide-black/10 text-xl dark:divide-white/10">
            <div className="flex flex-col gap-3 px-8 pb-8 pt-16 lg:p-16">
              <h3 className="font-gradual font-bold text-black text-head">
                Developers
              </h3>
              {DEVELOPERS_LINKS.map(({ key, name, href }) => (
                <Link
                  key={key}
                  href={href}
                  className="text-body transition duration-300 hover:text-black dark:hover:text-head"
                  eventName={`homepage_footer_site_${key}`}
                >
                  {name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3 px-8 pb-8 pt-16 lg:p-16">
              <h3 className="font-gradual font-bold text-black text-head">
                Community
              </h3>
              {COMMUNITY_LINKS.map(({ key, name, href }) => (
                <Link
                  key={key}
                  href={href}
                  target="_blank"
                  className="text-body transition duration-300 hover:text-black dark:hover:text-head"
                  eventName={`homepage_footer_site_${key}`}
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 divide-x divide-black/10 dark:divide-white/10 lg:col-span-2">
          <div className="lg:grid lg:grid-cols-2 lg:divide-x lg:divide-black/10 dark:lg:divide-white/10">
            <p className="px-8 pb-5 lg:px-16 lg:pb-9">© 2025 Shuttle</p>
            <div className="hidden lg:block" />
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:divide-x lg:divide-black/10 dark:lg:divide-white/10">
            <div className="hidden lg:block" />
            <p className="flex flex-wrap items-center gap-4 px-8 pb-5 lg:px-16 lg:pb-9">
              Backed by
              <YCombinator />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
