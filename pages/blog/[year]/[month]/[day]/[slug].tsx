import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { NextSeo } from "next-seo";
import Image from "next/image";
import { useRouter } from "next/router";
import { generateReadingTime } from "lib/helpers";
import {
  getAllPostSlugs,
  getPostData,
  getSortedPosts,
  Post,
} from "lib/blog/posts";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";
import gfm from "remark-gfm";
import slug from "rehype-slug";

// @ts-ignore
import toc from "markdown-toc";
import rehypePrism from "rehype-prism-plus";
import { SITE_URL } from "lib/constants";
import { HeadingLink } from "components/blog/HeadingLink";
import { GetStaticPropsContext, GetStaticPropsResult } from "next";
import { ParsedUrlQuery } from "querystring";
import Link from "components/elements/Link";
import clsx from "clsx";
import {
  BlogHeader,
  BlogPrevNext,
  BlogSidebar,
  CallToAction,
  CallToActionNewsletter,
} from "components/sections";
import { LinkedInLogo, Logo, TwitterLogo } from "components/svgs";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { Pre } from "components/blog/Pre";
import MastodonLogo from "components/svgs/MastodonLogo";
import HNLogo from "components/svgs/HNLogo";
import { trackEvent } from "lib/posthog";
import { BlogFAQ } from "../../../../../components/blog/BlogFAQ";
import { NewConsoleCTA } from "../../../../../components/blog/NewConsoleCTA";
import { MainTakeaways } from "../../../../../components/blog/MainTakeaways";
import { ExpandableImage } from "../../../../../components/blog/ExpandableImage";
import YouTubeEmbed from "../../../../../components/blog/YouTubeEmbed";
import {
  GenericCTA,
  SourceCodeCTA,
  DiscordCTA,
} from "../../../../../components/blog/cta";
import { AddToCursor } from "components/blog/cta/AddToCursor";
import { TestimonialCTA } from "components/blog/cta/TestimonialCTA";

export async function getStaticPaths() {
  const paths = getAllPostSlugs();

  return {
    paths: paths,
    fallback: false,
  };
}

interface Params extends ParsedUrlQuery {
  readonly year: string;
  readonly month: string;
  readonly day: string;
  readonly slug: string;
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<Params>): Promise<GetStaticPropsResult<Props>> {
  if (!params) throw new Error("No params found");

  const filePath = `${params.year}-${params.month}-${params.day}-${params.slug}`;
  const postContent = await getPostData(filePath);
  const readingTime = generateReadingTime(postContent);
  const { data, content } = matter(postContent);

  const mdxPost = await serialize(content, {
    scope: data,
    mdxOptions: {
      remarkPlugins: [gfm],
      rehypePlugins: [slug, rehypePrism],
    },
  });

  const contentTOC = toc(content, {
    maxdepth: data.toc_depth ?? 3,
  });

  const mdxTOC = await serialize(contentTOC.content);

  if (!mdxPost || !mdxPost.scope) throw new Error("No mdxPost found");

  const relatedPosts = getSortedPosts(
    6,
    mdxPost.scope.tags as readonly string[],
  )
    .filter((p) => p.slug != filePath)
    .slice(0, 5);

  const allPosts = getSortedPosts();

  const currentIndex = allPosts
    .map(function (e) {
      return e.slug;
    })
    .indexOf(filePath);

  const nextPost = allPosts[currentIndex + 1] ?? null;
  const prevPost = allPosts[currentIndex - 1] ?? null;

  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  const formattedPublishDate = new Date(data.date).toLocaleDateString(
    "en-IN",
    options,
  );
  const formattedModifiedDate = new Date(
    data.modified ?? data.date,
  ).toLocaleDateString("en-IN", options);
  const formattedUpdatedDate = data.updated_at
    ? new Date(data.updated_at).toLocaleDateString("en-IN", options)
    : null;
  const pageTitle = data.pageTitle ?? data.title;

  return {
    props: {
      prevPost,
      nextPost,
      relatedPosts,
      blog: {
        slug: `${params.year}/${params.month}/${params.day}/${params.slug}`,
        content: mdxPost,
        pageTitle,
        contentTOC,
        ...data,
        toc: mdxTOC,
        readingTime,
        date: data.date,
        dateReadable: formattedPublishDate,
        updated_at: data.updated_at ?? null,
        updated_at_readable: formattedUpdatedDate,
        modified: data.modified ?? data.date,
        modifiedReadable: formattedModifiedDate,
      } as Post,
    },
  };
}

const mdxComponents: MDXRemoteProps["components"] = {
  h2: (props) => (
    <HeadingLink level="h2" {...props}>
      {props.children}
    </HeadingLink>
  ),
  h3: (props) => (
    <HeadingLink level="h3" {...props}>
      {props.children}
    </HeadingLink>
  ),
  h4: (props) => (
    <HeadingLink level="h4" {...props}>
      {props.children}
    </HeadingLink>
  ),
  h5: (props) => (
    <HeadingLink level="h5" {...props}>
      {props.children}
    </HeadingLink>
  ),
  h6: (props) => (
    <HeadingLink level="h6" {...props}>
      {props.children}
    </HeadingLink>
  ),
  table: (props) => {
    const { className, children, ...rest } = props as any;
    return (
      <div className="my-6 w-full overflow-x-auto xl:overflow-x-visible shuttle-scrollbar">
        <table
          {...rest}
          className={clsx(
            className,
            "min-w-[48rem] xl:min-w-0 border-collapse",
          )}
        >
          {children}
        </table>
      </div>
    );
  },
  code(props) {
    // Only style inline code (code not inside pre tags)
    if (!props.className?.includes("language-")) {
      return (
        <code
          {...props}
          className="bg-gray-100 text-gray-800 px-1 py-0.5 rounded text-sm font-mono font-normal not-italic dark:bg-gray-800 dark:text-gray-200"
          style={{
            backgroundColor: "#f3f4f6",
            color: "#374151",
            padding: "0.125rem 0.25rem",
            borderRadius: "0.25rem",
            fontSize: "0.875rem",
            fontFamily: "Fira Mono, monospace",
          }}
        />
      );
    }
    // Return unchanged for code blocks
    return <code {...props} />;
  },
  a(props) {
    if (props?.href?.match(/^https?:\/\//)) {
      return (
        <a
          {...props}
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-gradient-to-r from-[#FC540C] to-[#FFD76F] bg-clip-text text-transparent"
        ></a>
      );
    }

    return (
      <Link
        {...(props as any)}
        className="my-0 text-body no-underline"
        target="_blank"
      ></Link>
    );
  },
  pre: (props) => {
    return <Pre {...props} />;
  },
  Tweet: (props) => {
    return (
      <div className="flex items-center justify-center [&>*]:w-full [&>*]:max-w-sm lg:[&>*]:max-w-xl">
        <TwitterTweetEmbed {...props} options={{ width: "100%" }} />
      </div>
    );
  },
  TLDR: (props) => {
    return (
      <div className="mb-24 text-left text-lg">
        <span className="font-bold text-black dark:text-head">TLDR;</span>
        <span className="prose-p:!my-2 dark:text-body">{props.children}</span>
      </div>
    );
  },
  img: (props) => {
    return (
      <ExpandableImage
        src={props.src || ""}
        alt={props.alt || ""}
        className="h-auto w-auto overflow-hidden rounded-md object-contain"
      />
    );
  },
  CaptionedImage: (props) => {
    return (
      <ExpandableImage
        src={props.src}
        alt={props.alt}
        caption={props.caption}
        className="h-auto w-auto overflow-hidden rounded-md object-contain"
      />
    );
  },
  blockquote(props) {
    return (
      <blockquote className="border-none bg-[linear-gradient(180deg,_#FC540C_25.63%,_rgba(255,_215,_111,_0.72)_60.67%,_#38D4E9_88.15%)] pl-1 text-left text-lg font-normal not-italic text-body">
        <div className="bg-[#E9E9E9] py-1 pl-8 prose-p:!my-0 dark:bg-black before:content-none after:content-none children:before:content-none children:after:content-none">
          {props.children}
        </div>
      </blockquote>
    );
  },
  BlogFAQ: (props) => {
    return <BlogFAQ {...props} />;
  },
  NewConsoleCTA: (props) => {
    return <NewConsoleCTA {...props} />;
  },
  MainTakeaways: (props) => {
    return <MainTakeaways {...props} />;
  },
  TryItYourself: (props) => {
    return <GenericCTA {...props} />;
  },
  GenericCTA: (props) => {
    return <GenericCTA {...props} />;
  },
  SourceCodeCTA: (props) => {
    return <SourceCodeCTA {...props} />;
  },
  DiscordCTA: (props) => {
    return <DiscordCTA {...props} />;
  },
  YouTubeEmbed: (props) => {
    return <YouTubeEmbed {...props} />;
  },
  AddToCursor: (props) => {
    return <AddToCursor {...props} />;
  },
  TestimonialCTA: (props) => {
    return <TestimonialCTA {...props} />;
  },
};

interface Props {
  readonly prevPost?: Post;
  readonly nextPost?: Post;
  readonly relatedPosts: Post[];
  readonly blog: Post;
}

export default function BlogPostPage(props: Props) {
  const { basePath } = useRouter();

  const title = props.blog.pageTitle ?? props.blog.title;

  return (
    <>
      <NextSeo
        title={`${title} | Shuttle`}
        description={props.blog.description}
        canonical={`https://www.shuttle.dev/blog/${props.blog.slug}`}
        openGraph={{
          title: `${title} | Shuttle`,
          description: props.blog.description,
          url: `${SITE_URL}blog/${props.blog.slug}`,
          type: "article",
          article: {
            //
            // TODO: add expiration and modified dates
            // https://github.com/garmeeh/next-seo#article
            publishedTime: props.blog.date,
            modifiedTime: props.blog.updated_at ?? props.blog.modified,
            //
            // TODO: author urls should be internal in future
            // currently we have external links to github profiles
            authors: [props.blog.author_url || ""],
            tags: (props.blog.tags || []).map((cat: string) => {
              return cat;
            }),
          },
          images: [
            {
              url: `${SITE_URL}${basePath}/images/blog/${props.blog.thumb}`,
            },
          ],
        }}
      />
      <div className="mx-auto max-w-6xl p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 gap-6 gap-y-12 lg:grid-cols-4">
          {/* Content */}
          <div className="lg:col-span-3">
            <BlogHeader post={props.blog} />
          </div>
          <div className="hidden lg:block" />
          <div className="lg:col-span-3">
            {(props.blog.thumb ?? props.blog.cover) && (
              <div className="mb-8 grid grid-cols-1 justify-items-center">
                <Image
                  src={"/images/blog/" + (props.blog.cover ?? props.blog.thumb)}
                  alt="Cover image"
                  width={810}
                  height={424}
                  className="w-full rounded-[2rem] object-contain"
                />
                {props.blog.caption && (
                  <span className="mt-2 text-center text-sm text-body">
                    {props.blog.caption}
                  </span>
                )}
              </div>
            )}
            <div className="mb-8">
              <CallToActionNewsletter bg={false} />
            </div>
            {props.blog.content && (
              <article
                className={clsx(
                  "prose dark:prose-invert",
                  "max-w-none overflow-x-hidden",
                  "prose-headings:before:block",
                  "prose-headings:before:-mt-36",
                  "prose-headings:before:pt-36",
                  "prose-headings:lg:before:-mt-20",
                  "prose-headings:before:lg:pt-20",
                  "text-xl text-body prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl prose-h5:text-lg prose-h6:text-base",
                  "[&_code:not(pre_code)]:before:content-none [&_code:not(pre_code)]:after:content-none",
                  "prose-table:w-full prose-td:align-top",
                )}
              >
                {props.blog.takeaways && props.blog.takeaways.length > 0 && (
                  <MainTakeaways takeaways={props.blog.takeaways} />
                )}
                <MDXRemote {...props.blog.content} components={mdxComponents} />
              </article>
            )}
            {/* Powered By */}
            {/* <CallToActionNewsletter bg={true} /> */}
            {/* <Socials /> */}

            <CallToActionNewsletter className="mt-10" />

            <div className="mb-20 mt-14 flex items-center space-x-4">
              <span className="text-head">Share article</span>
              <a
                href={`https://news.ycombinator.com/submitlink?u=${encodeURIComponent(
                  `${SITE_URL}blog/${props.blog.slug}`,
                )}&t=${encodeURIComponent(props.blog.title)}`}
                className="flex items-center rounded-xl border border-black/10 bg-black p-3 dark:border-white/10"
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  trackEvent(`blog_article_${props.blog.title}_hackernews`);
                }}
              >
                <HNLogo />
              </a>
              <a
                href={`https://twitter.com/share?text=${encodeURIComponent(
                  props.blog.title,
                )}&url=${SITE_URL}blog/${props.blog.slug}`}
                className="flex items-center rounded-xl border border-black/10 bg-black p-3 dark:border-white/10"
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  trackEvent(`blog_article_${props.blog.title}_twitter`);
                }}
              >
                <TwitterLogo />
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?url=${SITE_URL}blog/${props.blog.slug}&title=${props.blog.title}`}
                className="flex items-center rounded-xl border border-black/10 bg-black p-3 dark:border-white/10"
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  trackEvent(`blog_article_${props.blog.title}_linkedin`);
                }}
              >
                <LinkedInLogo />
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();

                  trackEvent(`blog_article_${props.blog.title}_mastodon`);

                  const instance = window.prompt(
                    "Enter your Mastodon instance (ex. mastodon.social):",
                  );
                  if (instance) {
                    window.location.href = `https://${instance}/share?text=${encodeURIComponent(
                      `${props.blog.title} ${SITE_URL}blog/${props.blog.slug}`,
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

            <BlogPrevNext prevPost={props.prevPost} nextPost={props.nextPost} />
          </div>
          {/* Sidebar */}
          <BlogSidebar
            tags={props.blog.tags || []}
            relatedPosts={props.relatedPosts || []}
            toc={props.blog.contentTOC?.json}
            mdxComponents={mdxComponents}
          />
        </div>
      </div>
      <CallToAction />
    </>
  );
}
