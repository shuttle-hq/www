import clsx from "clsx";
import { Post } from "lib/blog/posts";
import Link from "next/link";
import { FC } from "react";

interface BlogPrevNextProps {
  prevPost?: Post;
  nextPost?: Post;
}

const BlogPrevNext: FC<BlogPrevNextProps> = ({ prevPost, nextPost }) => {
  return (
    <div className="grid grid-cols-1 gap-5 overflow-visible py-7 lg:grid-cols-2 xl:gap-12">
      <div>
        {prevPost && <DirectionCard post={prevPost} hoverDirection="left" />}
      </div>
      <div>
        {nextPost && (
          <DirectionCard
            post={nextPost}
            className="text-right"
            hoverDirection="right"
          />
        )}
      </div>
    </div>
  );
};

interface DirectionCardProps {
  readonly post: Post;
  readonly className?: string;
  readonly hoverDirection: "left" | "right";
}

const DirectionCard: FC<DirectionCardProps> = ({
  post,
  className,
  hoverDirection,
}) => {
  return (
    <Link
      href={`/blog/${post.url}`}
      className={clsx(
        className,
        "group relative block cursor-pointer rounded-[2rem] border border-black/10 bg-[#13292C] p-8 !shadow-[#FC540C59] transition duration-500 hover:shadow-[0px_4px_40px] dark:border-white/10 dark:bg-black",
      )}
    >
      <div
        className={clsx(
          "relative w-full text-sm text-head transition-all duration-500",
          hoverDirection === "left"
            ? "left-0 group-hover:-left-2"
            : "right-0 group-hover:-right-2",
        )}
      >
        {hoverDirection === "left" ? (
          <svg
            width={38}
            height={22}
            viewBox="0 0 38 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.4706 21L2 11M10.4706 1L2 11M2 11H38"
              stroke="white"
              strokeWidth={2}
            />
          </svg>
        ) : (
          <svg
            width={38}
            height={22}
            viewBox="0 0 38 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-auto"
          >
            <path
              d="M27.5294 21L36 11M27.5294 1L36 11M36 11H-8.9407e-07"
              stroke="white"
              strokeWidth={2}
            />
          </svg>
        )}
      </div>

      <div
        className={clsx(
          "relative mt-4 text-lg text-head transition-all duration-500",
          hoverDirection === "left"
            ? "left-0 group-hover:left-2"
            : "right-0 group-hover:right-2",
        )}
      >
        {post.title}
      </div>
      <div
        className={clsx(
          "relative mt-5 text-xs text-head transition-all duration-500",
          hoverDirection === "left"
            ? "left-0 group-hover:left-2"
            : "right-0 group-hover:right-2",
        )}
      >
        {post.dateReadable} • {post.readingTime}
      </div>
    </Link>
  );
};

export default BlogPrevNext;
