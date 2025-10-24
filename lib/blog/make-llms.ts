import { SITE_URL } from "../constants";
import { getSortedPosts, getPostData, Post } from "./posts";
import matter from "gray-matter";

// List of main pages on the website
const MAIN_PAGES = [
  { url: "", title: "Home", description: "Shuttle - Build backends fast" },
  {
    url: "pricing",
    title: "Pricing",
    description: "Shuttle pricing plans and information",
  },
  {
    url: "about",
    title: "About",
    description: "About Shuttle and our mission",
  },
  {
    url: "starters",
    title: "Starters",
    description: "Get started quickly with Shuttle starter templates",
  },
  {
    url: "careers",
    title: "Careers",
    description: "Join the Shuttle team",
  },
  {
    url: "contact",
    title: "Contact",
    description: "Get in touch with Shuttle",
  },
  { url: "ai", title: "Shuttle AI", description: "AI-powered backend development" },
  {
    url: "shuttle-batch",
    title: "Shuttle Batch",
    description: "Shuttle's accelerator program",
  },
  {
    url: "shuttle-heroes",
    title: "Shuttle Heroes",
    description: "Community champions and contributors",
  },
  {
    url: "launchpad",
    title: "Launchpad",
    description: "Shuttle's newsletter for backend developers",
  },
  {
    url: "privacy",
    title: "Privacy Policy",
    description: "Shuttle privacy policy",
  },
  {
    url: "terms",
    title: "Terms of Service",
    description: "Shuttle terms of service",
  },
  {
    url: "acceptable-use",
    title: "Acceptable Use Policy",
    description: "Shuttle acceptable use policy",
  },
  { url: "cookies", title: "Cookie Policy", description: "Shuttle cookie policy" },
  {
    url: "dpa",
    title: "Data Processing Agreement",
    description: "Shuttle data processing agreement",
  },
];

// Generate llms.txt - structured index
const generateLlmsTxt = (posts: readonly Post[]): string => {
  let output = "# Shuttle\n\n";

  // Pages section first
  output += "## Pages\n\n";
  MAIN_PAGES.forEach((page) => {
    const url = page.url ? `${SITE_URL}${page.url}` : SITE_URL;
    output += `- [${page.title}](${url}): ${page.description}\n`;
  });

  // Blog Posts section second
  output += "\n## Blog Posts\n\n";
  posts.forEach((post) => {
    const url = `${SITE_URL}blog/${post.url}`;
    output += `- [${post.title}](${url}): ${post.description}\n`;
  });

  return output;
};

// Generate llms-full.txt - full content
const generateLlmsFullTxt = async (posts: readonly Post[]): Promise<string> => {
  let output = "# Shuttle\n\n";
  output += `This file contains the full content of all blog posts and pages from ${SITE_URL}\n\n`;
  output += "---\n\n";

  // Blog Posts with full content
  for (const post of posts) {
    const url = `${SITE_URL}blog/${post.url}`;
    output += `# ${post.title}\n`;
    output += `Source: ${url}\n`;
    output += `Date: ${post.dateReadable}\n`;
    if (post.author) {
      output += `Author: ${post.author}\n`;
    }
    if (post.tags && post.tags.length > 0) {
      output += `Tags: ${post.tags.join(", ")}\n`;
    }
    output += `\n${post.description}\n\n`;

    try {
      // Get full MDX content
      const postContent = await getPostData(post.slug!);
      const { content } = matter(postContent);

      // Add the full content
      output += content;
    } catch (error) {
      output += `[Content could not be loaded]\n`;
    }

    output += "\n\n---\n\n";
  }

  // Pages section (basic info only, as we don't have static content)
  output += "# Pages\n\n";
  MAIN_PAGES.forEach((page) => {
    const url = page.url ? `${SITE_URL}${page.url}` : SITE_URL;
    output += `## ${page.title}\n`;
    output += `Source: ${url}\n`;
    output += `${page.description}\n\n`;
  });

  return output;
};

// Generate content at module load time (build time)
const posts = getSortedPosts();

export const llmsTxtContent = generateLlmsTxt(posts);

// For llms-full.txt, we need to generate it asynchronously
// So we'll export the function and call it in the API route
export const generateLlmsFullContent = () => generateLlmsFullTxt(posts);
