'use client';

import { SITE_URL } from "lib/constants";
import { Post } from "lib/blog/posts";
import { LinkedInLogo, TwitterLogo } from "components/svgs";
import MastodonLogo from "components/svgs/MastodonLogo";
import HNLogo from "components/svgs/HNLogo";
import { trackEvent } from "lib/posthog";

interface Props {
  blog: Post;
}

export function SocialShareButtons({ blog }: Props) {
  return (
    <div className="mb-20 mt-14 flex items-center space-x-4">
      <span className="text-head">Share article</span>
      <a
        href={`https://news.ycombinator.com/submitlink?u=${encodeURIComponent(
          `${SITE_URL}blog/${blog.slug}`,
        )}&t=${encodeURIComponent(blog.title)}`}
        className="flex items-center rounded-xl border border-black/10 bg-black p-3 dark:border-white/10"
        target="_blank"
        rel="noreferrer"
        onClick={() => {
          trackEvent(`blog_article_${blog.title}_hackernews`);
        }}
      >
        <HNLogo />
      </a>
      <a
        href={`https://twitter.com/share?text=${encodeURIComponent(
          blog.title,
        )}&url=${SITE_URL}blog/${blog.slug}`}
        className="flex items-center rounded-xl border border border-black/10 bg-black p-3 dark:border-white/10"
        target="_blank"
        rel="noreferrer"
        onClick={() => {
          trackEvent(`blog_article_${blog.title}_twitter`);
        }}
      >
        <TwitterLogo />
      </a>
      <a
        href={`https://www.linkedin.com/shareArticle?url=${SITE_URL}blog/${blog.slug}&title=${blog.title}`}
        className="flex items-center rounded-xl border border border-black/10 bg-black p-3 dark:border-white/10"
        target="_blank"
        rel="noreferrer"
        onClick={() => {
          trackEvent(`blog_article_${blog.title}_linkedin`);
        }}
      >
        <LinkedInLogo />
      </a>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();

          trackEvent(`blog_article_${blog.title}_mastodon`);

          const instance = window.prompt(
            "Enter your Mastodon instance (ex. mastodon.social):",
          );
          if (instance) {
            window.location.href = `https://${instance}/share?text=${encodeURIComponent(
              `${blog.title} ${SITE_URL}blog/${blog.slug}`,
            )}`;
          }
        }}
        className="flex items-center rounded-xl border border-black/10 bg-black p-3 dark:border-white/10"
        target="_blank"
        rel="noreferrer"
      >
        <MastodonLogo />
      </a>
    </div>
  );
}