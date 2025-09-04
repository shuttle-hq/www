import { NextSeo } from "next-seo";
import { SITE_URL } from "lib/constants";
import { getAllTags, getSortedPosts } from "lib/blog/posts";
import { Blog, FeaturedBlogPost } from "components/sections";
import { Metadata } from "next";

export async function generateStaticParams() {
  const tags = getAllTags();

  return tags.map((tag) => ({
    tag,
  }));
}

interface Props {
  params: {
    tag: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tag = params.tag !== "all" ? params.tag : "";
  const tagReadable = tag.replaceAll("-", " ");
  
  const meta_title = tagReadable
    ? `Articles tagged: "${tagReadable}" - Shuttle Blog`
    : `Shuttle Blog`;
  const meta_description = tagReadable
    ? `Learn more about ${tagReadable} through reading the Shuttle Blog.`
    : "Dive into the Shuttle blog for insights on Rust programming, tutorials, web development tips, and exclusive thought leadership articles.";

  return {
    title: meta_title,
    description: meta_description,
    openGraph: {
      title: meta_title,
      description: meta_description,
      url: `${SITE_URL}blog/tags/${params.tag}`,
      images: [
        {
          url: `${SITE_URL}images/og/og-image.jpg`,
        },
      ],
    },
    alternates: {
      types: {
        "application/rss+xml": `${SITE_URL}rss.xml`,
      },
    },
  };
}

export default function BlogPage({ params }: Props) {
  const tag = params.tag !== "all" ? params.tag : "";
  const tagReadable = tag.replaceAll("-", " ");
  const posts = getSortedPosts(0, tag ? [tag] : undefined);
  const tags = getAllTags();

  const [headPost, ...tailPosts] = posts;

  const meta_title = tagReadable
    ? `Articles tagged: "${tagReadable}" - Shuttle Blog`
    : `Shuttle Blog`;
  const meta_description = tagReadable
    ? `Learn more about ${tagReadable} through reading the Shuttle Blog.`
    : "Dive into the Shuttle blog for insights on Rust programming, tutorials, web development tips, and exclusive thought leadership articles.";

  return (
    <>
      <NextSeo
        title={meta_title}
        description={meta_description}
        openGraph={{
          title: meta_title,
          description: meta_description,
          url: `${SITE_URL}blog/tags/${params.tag}`,
          images: [
            {
              url: `${SITE_URL}images/og/og-image.jpg`,
            },
          ],
        }}
        additionalLinkTags={[
          {
            rel: "alternate",
            type: "application/rss+xml",
            href: `${SITE_URL}rss.xml`,
          },
        ]}
      />

      <FeaturedBlogPost {...headPost} />

      <Blog tags={tags} posts={tailPosts} />
    </>
  );
}