import Image from "next/image";

import styles from "./UserStories.module.css"; // Adjust the path as necessary
import Link from "next/link";

const userStories = [
  // {
  //   key: "decent-land",
  //   title:
  //     "Decent Land eliminated infrastructure complexity for Web3 development",
  //   logo: "/path/to/logo.png", // Replace with actual logo path
  //   link: "/customers/decent-land", // Replace with actual story link
  // },
  // {
  //   key: "triacc",
  //   title:
  //     "How Triacc accelerated from concept to production in days, not weeks",
  //   logo: "/path/to/logo.png", // Replace with actual logo path
  //   link: "/customers/triacc", // Replace with actual story link
  // },
  {
    key: "unwritten",
    // title:
    //   "How Unwritten powers climate risk modeling with zero infrastructure overhead",
    logo: "/images/user-stories/unwritten.png",
    link: "/customers/unwritten",
    title: `"What took days to weeks to set up with traditional
                  infrastructure now takes minutes with Shuttle. It's like
                  Vercel for backend"`,
    quoteAuthor: "Phillip Marks, CRO & CTO, Unwritten",
  },
  // {
  //   key: "weavevm",
  //   title: "WeaveVM eliminated code refactoring and complex infra management",
  //   logo: "/path/to/logo.png", // Replace with actual logo path
  //   link: "/customers/weavevm", // Replace with actual story link
  // },
];

export default function UserStories() {
  return (
    <main className="flex flex-col mx-auto mt-24 gap-16 w-full max-w-[1280px] px-5 sm:px-10 lg:mt-28">
      <div className="flex flex-col items-center gap-4 md:gap-8 max-w-[1000px] mx-auto">
        <h1 className="w-fit text-center font-gradual text-5xl font-bold text-black dark:text-head lg:text-6.5">
          Why Developers Choose Shuttle
        </h1>
        <p className="pt-0 w-full text-base md:text-xl tracking-wide leading-6 text-center text-neutral-400 md:leading-8">
          At Shuttle, we don&apos;t just provide cloud infrastructure - we
          provide a developer-first experience designed to make building and
          deploying Rust applications effortless and joyful.
        </p>
      </div>

      <div className="flex gap-6 justify-center">
        {userStories.map((story) => (
          <div
            key={story.key}
            className={`flex flex-col w-[50%] items-start border border-solid border-white border-opacity-30 rounded-[32px] overflow-hidden ${styles["user-story-card"]}`}
          >
            <div className="flex flex-col p-10 gap-4 bg-[#0F0F0F]">
              <Image
                src={story.logo}
                alt={`${story.title} logo`}
                width={120}
                height={19}
                className="mb-4"
              />
              <Link href={story.link} className="flex flex-col gap-6">
                <h2 className="text-3xl font-bold text-zinc-300 font-gradual">
                  {story.title}
                </h2>
                <div className="flex flex-col gap-2">
                  {/* <p className="text-base text-zinc-300">{story.quoteText}</p> */}
                  <p className="text-base text-zinc-400">{story.quoteAuthor}</p>
                </div>
              </Link>
            </div>
            <Link
              href={story.link}
              className="flex justify-between items-center w-full px-10 py-5 border-t border-solid border-white border-opacity-30"
            >
              <span className={styles["gradient-link"]}>Read story</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles["arrow-icon"]} // Use the CSS module for styling
              >
                <path
                  d="M16.627 12.75H4.5V11.25H16.627L10.9308 5.55375L12 4.5L19.5 12L12 19.5L10.9308 18.4462L16.627 12.75Z"
                  fill="#E3E3E3"
                />
                <path
                  d="M16.627 12.75H4.5V11.25H16.627L10.9308 5.55375L12 4.5L19.5 12L12 19.5L10.9308 18.4462L16.627 12.75Z"
                  fill="url(#paint0_linear_305_13006)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_305_13006"
                    x1="0.105"
                    y1="14.3437"
                    x2="22.6999"
                    y2="5.47117"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FC540C" />
                    <stop
                      offset="0.703125"
                      stop-color="#FFD76F"
                      stop-opacity="0.72"
                    />
                    <stop offset="1" stop-color="#38D4E9" />
                  </linearGradient>
                </defs>
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
