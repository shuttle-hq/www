import { getAuthors } from "lib/blog/authors";
import { Post } from "lib/blog/posts";
import Image from "next/image";
import Link from "components/elements/Link";
import { FC } from "react";

interface BlogHeaderProps {
  post: Post;
}

const BlogHeader: FC<BlogHeaderProps> = ({ post }) => {
  const author = getAuthors(post.author?.split(",") ?? []);

  return (
    <div className="max-w-5xl space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold leading-tight text-black dark:text-head lg:text-6xl">
          {post.title}
        </h1>
        <div className="flex gap-3">
          {author.map((author, index) => {
            return (
              <div className="mt-6 lg:mt-8" key={index}>
                <div className="flex items-center gap-2">
                  {author.author_image_url && (
                    <Image
                      src={author?.author_image_url || "/images/logo.png"}
                      className="rounded-full border"
                      width={24}
                      height={24}
                      alt=""
                    />
                  )}
                  <div className="flex font-bold text-head">
                    <Link
                      className={author.author_url ? "cursor-pointer" : ""}
                      href={author.author_url}
                      target="_blank"
                    >
                      {author?.author || "Shuttle"}
                      {author?.position ? ` - ${author.position}` : ""}
                    </Link>
                    <span className="font-normal text-body">
                      &nbsp;&nbsp;•{" "}
                      <time dateTime={new Date(post.date).toISOString()}>
                        {new Date(post.date).toLocaleDateString("en-GB", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </time>
                    </span>
                    {post.updated_at && (
                      <span className="font-normal text-body">
                        &nbsp;(Updated on{" "}
                        <time
                          dateTime={new Date(post.updated_at).toISOString()}
                        >
                          {new Date(post.updated_at).toLocaleDateString(
                            "en-GB",
                            {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            },
                          )}
                        </time>
                        )
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
