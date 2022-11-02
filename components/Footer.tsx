import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { DISCORD_URL, GITHUB_URL, TWITTER_URL } from "../lib/constants";
import ExternalLink from "./ExternalLink";
import InternalLink from "./InternalLink";

// const navigation = [
//   { name: "Solutions", href: "#" },
//   { name: "Pricing", href: "#" },
//   { name: "Docs", href: "#" },
//   { name: "Company", href: "#" },
// ];

const communities = [
  {
    name: "Github",
    href: GITHUB_URL,
    icon: faGithub,
  },
  {
    name: "Discord",
    href: DISCORD_URL,
    icon: faDiscord,
  },
  {
    name: "Twitter",
    href: TWITTER_URL,
    icon: faTwitter,
  },
];

const navigation = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "/#features" },
      { name: "Examples", href: "/#examples" },
      { name: "Code Snippets", href: "/#code-snippets" },
      {
        name: "Roadmap",
        href: "https://github.com/orgs/shuttle-hq/projects/4/views/2",
      },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "Blog", href: "/blog" },
      {
        name: "Careers",
        href: "https://www.workatastartup.com/companies/shuttle",
      },
    ],
  },
  {
    title: "Developers",
    links: [
      {
        name: "Documentation",
        href: "https://docs.rs/shuttle-service/latest/shuttle_service/",
      },
      {
        name: "Guides",
        href: "https://github.com/shuttle-hq/examples",
      },
      {
        name: "Contributors",
        href: "https://github.com/shuttle-hq/shuttle/graphs/contributors",
      },
    ],
  },
  {
    title: "Community",
    links: [
      ...communities.map(({ name, href }) => ({ name, href })),
      {
        name: "Linkedin",
        href: "https://www.linkedin.com/company/shuttle-yc/",
      },
    ],
  },
];

export default function Footer() {
  return (
    <>
      <div className="fixed right-8 bottom-28 hidden flex-col rounded-full bg-slate-300 shadow-xl dark:bg-[#252738] md:flex">
        {communities.map((community, index) => (
          <ExternalLink
            key={index}
            href={community.href}
            title={community.name}
            className="flex h-10 w-10 items-center justify-center text-center text-slate-700 opacity-75 hover:opacity-100 dark:text-dark-200"
          >
            <FontAwesomeIcon icon={community.icon} className="text-[20px]" />
          </ExternalLink>
        ))}
      </div>
      {/* 
      <div className="mx-auto max-w-2xl py-20 px-4 text-center sm:py-28 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight dark:text-gray-200 sm:text-4xl">
          Let's make Rust the next language of cloud-native
        </h2>
        <div className="mt-8 flex justify-center gap-3">
          {communities.map((community, index) => (
            <ExternalLink
              key={index}
              href={community.href}
              className="inline-block rounded border border-current py-3 px-5 text-base font-medium text-slate-600 hover:text-slate-900 dark:text-gray-200 hover:dark:text-white"
            >
              <FontAwesomeIcon
                className="-ml-1 mr-3 text-current transition"
                icon={community.icon}
              />
              {community.name}
            </ExternalLink>
          ))}
        </div>
      </div> */}

      {/* <Socials /> */}

      <footer className="mx-auto max-w-6xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="-m-4 flex flex-wrap justify-between pb-8">
          {navigation.map((col, index) => (
            <div className="basis-2/4 p-4 md:basis-1" key={index}>
              <h3 className="text-lg font-medium tracking-wider text-slate-800 dark:text-gray-200">
                {col.title}
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {col.links.map((link, index) => (
                  <li key={index}>
                    {link.href.startsWith("/") ? (
                      <InternalLink
                        href={link.href}
                        className="whitespace-nowrap text-base text-slate-500 hover:text-slate-900 dark:text-gray-400 hover:dark:text-gray-300"
                      >
                        {link.name}
                      </InternalLink>
                    ) : (
                      <ExternalLink
                        href={link.href}
                        className="whitespace-nowrap text-base text-slate-500 hover:text-slate-900 dark:text-gray-400 hover:dark:text-gray-300"
                      >
                        {link.name}
                      </ExternalLink>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-2 sm:flex-row">
          <p className="text-base dark:text-gray-300">&copy; 2022 shuttle</p>
          {/* <p className="flex gap-2">
            {navigation.map((link, index) => (
              <InternalLink
                key={index}
                href={link.href}
                className="text-base dark:text-gray-300 hover:brightness-125"
              >
                {link.name}
              </InternalLink>
            ))}
          </p> */}
          <p className="dark:text-gray-300 sm:ml-auto">
            Backed by
            <span className="relative -bottom-1 mx-2 inline-block text-[20px] leading-none dark:text-white">
              <span className="sr-only">Y</span>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                preserveAspectRatio="xMidYMid"
                aria-hidden
              >
                <rect
                  fill="none"
                  x="0"
                  y="0"
                  width="256"
                  height="256"
                  stroke="currentColor"
                  strokeWidth={20}
                ></rect>
                <path
                  d="M119.373653,144.745813 L75.43296,62.4315733 L95.5144533,62.4315733 L121.36192,114.52416 C121.759575,115.452022 122.2235,116.413008 122.753707,117.407147 C123.283914,118.401285 123.747838,119.428546 124.145493,120.48896 C124.410597,120.886615 124.609422,121.251127 124.741973,121.582507 C124.874525,121.913886 125.007075,122.212123 125.139627,122.477227 C125.802386,123.802744 126.39886,125.095105 126.929067,126.354347 C127.459274,127.613589 127.923198,128.773399 128.320853,129.833813 C129.381268,127.580433 130.541078,125.1614 131.80032,122.57664 C133.059562,119.99188 134.351922,117.307747 135.67744,114.52416 L161.92256,62.4315733 L180.612267,62.4315733 L136.27392,145.739947 L136.27392,198.826667 L119.373653,198.826667 L119.373653,144.745813 Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
            Combinator
          </p>
        </div>
      </footer>
    </>
  );
}
