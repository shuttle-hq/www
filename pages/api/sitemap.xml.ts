import type { NextApiRequest, NextApiResponse } from "next";
import { getSortedPosts, getAllTags as getAllBlogTags } from "lib/blog/posts";
import { getSortedIssues } from "lib/launchpad/issues";

const SITE_URL = "https://www.shuttle.dev";

// Static pages to include in sitemap
const STATIC_PAGES = [
  { url: "/", priority: "1.0", changefreq: "daily" },
  { url: "/about", priority: "0.8", changefreq: "monthly" },
  { url: "/acceptable-use", priority: "0.5", changefreq: "yearly" },
  { url: "/ai", priority: "0.9", changefreq: "weekly" },
  { url: "/careers", priority: "0.8", changefreq: "monthly" },
  { url: "/cch", priority: "0.7", changefreq: "monthly" },
  { url: "/contact", priority: "0.7", changefreq: "monthly" },
  { url: "/cookies", priority: "0.3", changefreq: "yearly" },
  { url: "/dpa", priority: "0.5", changefreq: "yearly" },
  { url: "/pricing", priority: "0.9", changefreq: "weekly" },
  { url: "/pricing2", priority: "0.7", changefreq: "weekly" },
  { url: "/privacy", priority: "0.5", changefreq: "yearly" },
  { url: "/shuttle-batch", priority: "0.8", changefreq: "monthly" },
  { url: "/shuttle-heroes", priority: "0.8", changefreq: "monthly" },
  { url: "/starters", priority: "0.8", changefreq: "weekly" },
  { url: "/terms", priority: "0.5", changefreq: "yearly" },
  { url: "/customers", priority: "0.8", changefreq: "monthly" },
  { url: "/customers/decent-land", priority: "0.7", changefreq: "monthly" },
  { url: "/customers/triacc", priority: "0.7", changefreq: "monthly" },
  { url: "/customers/unwritten", priority: "0.7", changefreq: "monthly" },
  { url: "/launchpad", priority: "0.8", changefreq: "weekly" },
  { url: "/launchpad/issues", priority: "0.8", changefreq: "weekly" },
];

function generateSitemapXML(): string {
  const posts = getSortedPosts();
  const issues = getSortedIssues();
  const tags = getAllBlogTags();

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Add static pages
  STATIC_PAGES.forEach((page) => {
    xml += "  <url>\n";
    xml += `    <loc>${SITE_URL}${page.url}</loc>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += "  </url>\n";
  });

  // Add blog posts
  posts.forEach((post) => {
    const lastmod = post.modified || post.date;
    xml += "  <url>\n";
    xml += `    <loc>${SITE_URL}/blog/${post.url}</loc>\n`;
    xml += `    <lastmod>${new Date(lastmod).toISOString()}</lastmod>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>0.7</priority>\n`;
    xml += "  </url>\n";
  });

  // Add blog tag pages
  tags.forEach((tag) => {
    xml += "  <url>\n";
    xml += `    <loc>${SITE_URL}/blog/tags/${tag}</loc>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>0.6</priority>\n`;
    xml += "  </url>\n";
  });

  // Add launchpad issues
  issues.forEach((issue) => {
    xml += "  <url>\n";
    xml += `    <loc>${SITE_URL}/launchpad/issues/${issue.url}</loc>\n`;
    xml += `    <lastmod>${new Date(issue.date).toISOString()}</lastmod>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>0.7</priority>\n`;
    xml += "  </url>\n";
  });

  xml += "</urlset>";

  return xml;
}

export default function sitemap(
  _: NextApiRequest,
  res: NextApiResponse<string>,
) {
  res.setHeader("Content-Type", "text/xml");
  res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate");
  res.status(200).send(generateSitemapXML());
}
