import clsx from "clsx";
import Image from "next/image";
import Link from "./Link";
import { FC, ReactNode } from "react";
import Button from "./Button";

import { Calendar, Discord, Paperclip, React } from "components/svgs";
import { trackEvent } from "lib/posthog";

export type StarterIcon = "paperclip" | "discord" | "react" | "calendar";

export function getStarterIcon(icon: StarterIcon): ReactNode {
  const props = {
    className: "mb-auto",
  };
  switch (icon) {
    case "paperclip":
      return <Paperclip {...props} />;
    case "discord":
      return <Discord {...props} />;
    case "react":
      return <React {...props} />;
    case "calendar":
      return <Calendar {...props} />;
  }
}

export type StarterAttrs = {
  title: string;
  icon?: StarterIcon;
  description?: string;
  sourceLink?: string;
  postLink?: string;
  deployLink?: string;
};

export interface StarterXProps {
  bg: string;
  bgClassName?: string;
  stars: string;
  starsClassName?: string;
  stars2: string;
  stars2ClassName?: string;
  templateKey: number;
}

export interface StarterProps extends StarterXProps, StarterAttrs { }

const Starter: FC<StarterProps> = ({
  icon,
  title,
  description,
  bg,
  bgClassName,
  stars,
  starsClassName,
  stars2,
  stars2ClassName,
  sourceLink,
  postLink,
  deployLink,
  templateKey,
}) => {
  return (
    <div className="border-gradient group relative relative h-full overflow-visible rounded-4xl bg-[#13292C] px-5 pb-6 pt-8 shadow-[0_0_0_1px_#191919] after:rounded-[2rem] hover:shadow-none dark:bg-black">
      <Image src={bg} alt="bg" fill className={bgClassName} />
      <Image src={stars} alt="stars" fill className={starsClassName} />
      <Image src={stars2} alt="stars 2" fill className={stars2ClassName} />
      <div className="relative z-10 flex h-full flex-col">
        {icon && getStarterIcon(icon)}
        <h3
          className={clsx(
            "font-gradual text-2xl font-bold text-head",
            sourceLink ? "mt-3" : "my-auto",
          )}
        >
          {title}
        </h3>
        <p className="mt-1 text-head opacity-60">{description}</p>
        {sourceLink ? (
          <div className="mt-auto flex items-center justify-between gap-5 pt-5 text-head">
            <span>
              <Link
                href={sourceLink}
                className="hover:underline"
                eventName={`homepage_starters_${templateKey}_source`}
              >
                Source
              </Link>
              <span className="px-[0.375rem]">•</span>
              <Link
                href={postLink || "/blog"}
                className="hover:underline"
                eventName={`homepage_starters_${templateKey}_post`}
              >
                Post
              </Link>
            </span>
            <Button
              variant="primary"
              href={deployLink || "https://console.shuttle.dev/"}
              eventName={`homepage_starters_${templateKey}_deploy`}
            >
              Deploy
            </Button>
          </div>
        ) : (
          <Link
            href="/starters"
            className="group mt-3 inline-flex items-center text-head"
          >
            View all
            {/* Right Arrow */}
            <svg
              className="relative left-2 my-4 text-head transition-all duration-300 ease-in-out group-hover:left-4"
              width={17}
              height={14}
              viewBox="0 0 17 14"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 7H15M15 7L9.78261 1M15 7L9.78261 13"
                strokeWidth={2}
              />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Starter;
