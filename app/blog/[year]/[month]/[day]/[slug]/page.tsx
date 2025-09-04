import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { NextSeo } from "next-seo";
import Image from "next/image";
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

// Dynamic import for markdown-toc to handle server-side compatibility
const toc = require("markdown-toc");
import rehypePrism from "@mapbox/rehype-prism";
import { DISCORD_URL, SITE_URL } from "lib/constants";
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
import { BlogFAQ } from "../../../../../../components/blog/BlogFAQ";
import { NewConsoleCTA } from "../../../../../../components/blog/NewConsoleCTA";
import { Metadata } from "next";
import { SocialShareButtons } from "./SocialShareButtons";

export async function generateStaticParams() {
  const paths = getAllPostSlugs();

  return paths.map((path) => ({
    year: path.params.year,
    month: path.params.month,
    day: path.params.day,
    slug: path.params.slug,
  }));
}

interface Props {
  params: {
    year: string;
    month: string;
    day: string;
    slug: string;
  };
}

async function getBlogPostData(params: Props["params"]) {
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
  const formattedUpdatedDate = data.updated_on
    ? new Date(data.updated_on).toLocaleDateString("en-IN", options)
    : null;
  const pageTitle = data.pageTitle ?? data.title;

  return {
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
      updated_on: data.updated_on ?? null,
      updated_on_readable: formattedUpdatedDate,
      modified: data.modified ?? data.date,
      modifiedReadable: formattedModifiedDate,
    } as Post,
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { blog } = await getBlogPostData(params);
  const title = blog.pageTitle ?? blog.title;

  return {
    title: `${title} | Shuttle`,
    description: blog.description,
    openGraph: {
      title: `${title} | Shuttle`,
      description: blog.description,
      url: `${SITE_URL}blog/${blog.slug}`,
      type: "article",
      publishedTime: blog.date,
      modifiedTime: blog.updated_on ?? blog.modified,
      authors: [blog.author_url || ""],
      tags: (blog.tags || []).map((cat: string) => {
        return cat;
      }),
      images: [
        {
          url: `${SITE_URL}/images/blog/${blog.thumb}`,
        },
      ],
    },
  };
}

const mdxComponents: MDXRemoteProps["components"] = {
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
      <div className="mb-24 text-left text-xl">
        <span className="font-bold text-black dark:text-head">TLDR;</span>
        <span className="prose-p:!my-2 dark:text-body">{props.children}</span>
      </div>
    );
  },
  CaptionedImage: (props) => {
    return (
      <div className="relative flex w-full flex-col items-center">
        <Image
          src={props.src}
          alt={props.alt}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-auto overflow-hidden rounded-md object-contain"
        />
        <span className="-mt-6 text-sm text-body">{props.caption}</span>
      </div>
    );
  },
  blockquote(props) {
    return (
      <blockquote className="border-none bg-[linear-gradient(180deg,_#FC540C_25.63%,_rgba(255,_215,_111,_0.72)_60.67%,_#38D4E9_88.15%)] pl-2 text-left text-2xl font-normal not-italic text-body">
        <div className="bg-[#E9E9E9] py-1 pl-8 prose-p:!my-0 dark:bg-black">
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
};

export default async function BlogPostPage({ params }: Props) {
  const { prevPost, nextPost, relatedPosts, blog } = await getBlogPostData(params);

  const title = blog.pageTitle ?? blog.title;

  return (
    <>
      <NextSeo
        title={`${title} | Shuttle`}
        description={blog.description}
        openGraph={{
          title: `${title} | Shuttle`,
          description: blog.description,
          url: `${SITE_URL}blog/${blog.slug}`,
          type: "article",
          article: {
            //
            // TODO: add expiration and modified dates
            // https://github.com/garmeeh/next-seo#article
            publishedTime: blog.date,
            modifiedTime: blog.updated_on ?? blog.modified,
            //
            // TODO: author urls should be internal in future
            // currently we have external links to github profiles
            authors: [blog.author_url || ""],
            tags: (blog.tags || []).map((cat: string) => {
              return cat;
            }),
          },
          images: [
            {
              url: `${SITE_URL}/images/blog/${blog.thumb}`,
            },
          ],
        }}
      />
      <div className="mx-auto max-w-6xl p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 gap-6 gap-y-12 lg:grid-cols-4">
          {/* Content */}
          <div className="lg:col-span-3">
            <BlogHeader post={blog} />
          </div>
          <div className="hidden lg:block" />
          <div className="lg:col-span-3">
            {(blog.thumb ?? blog.cover) && (
              <div className="mb-8 grid grid-cols-1 justify-items-center">
                <Image
                  src={"/images/blog/" + (blog.cover ?? blog.thumb)}
                  alt="Cover image"
                  width={810}
                  height={424}
                  className="w-full rounded-[2rem] object-contain"
                />
                {blog.caption && (
                  <span className="mt-2 text-center text-sm text-body">
                    {blog.caption}
                  </span>
                )}
              </div>
            )}
            {/* <CallToActionNewsletter bg={false} />
            {blog.contentTOC.json.length > 0 ? (
              <TableOfContents toc={blog.contentTOC.json} />
            ) : null} */}

            {blog.content && (
              <article
                className={clsx(
                  "prose dark:prose-invert",
                  "max-w-none overflow-x-hidden",
                  "prose-headings:before:block",
                  "prose-headings:before:-mt-36",
                  "prose-headings:before:pt-36",
                  "prose-headings:lg:before:-mt-20",
                  "prose-headings:before:lg:pt-20",
                  "text-xl text-body prose-h2:text-5xl prose-h3:text-4xl prose-h4:text-3xl prose-h5:text-2xl",
                )}
              >
                <MDXRemote {...blog.content} components={mdxComponents} />
              </article>
            )}
            {/* Powered By */}
            {/* <CallToActionNewsletter bg={true} /> */}
            {/* <Socials /> */}
            <SocialShareButtons blog={blog} />
            <BlogPrevNext prevPost={prevPost} nextPost={nextPost} />
          </div>
          {/* Sidebar */}
          <BlogSidebar
            tags={blog.tags || []}
            relatedPosts={relatedPosts || []}
            toc={blog.toc}
            mdxComponents={mdxComponents}
          />
        </div>
      </div>
      <CallToAction />
    </>
  );
}