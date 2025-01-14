import { APP_NAME, SITE_URL } from "../constants";
import { getSortedIssues, Issue } from "./issues";
import fs from "fs";

const issueXML = (issue: Issue): string => `
<item>
  <guid>${SITE_URL}blog/${issue.url}</guid>
  <title>${issue.title}</title>
  <link>${SITE_URL}blog/${issue.url}</link>
  <description>${issue.description}</description>
  <pubDate>${new Date(issue.date).toUTCString()}</pubDate>
</item>
`;

const rssXML = (issues: readonly Issue[]): string => `
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Blog - ${APP_NAME}</title>
    <link>${SITE_URL}</link>
    <description>Latest news from ${APP_NAME}</description>
    <language>en</language>
    <lastBuildDate>${new Date(issues[0].date).toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
    ${issues.map(issueXML).join("")}
  </channel>
</rss>
`;

const issues = getSortedIssues();

if (!window) {
  fs.writeFile("./public/rss.xml", rssXML(issues), (err) => {
    if (err != null) {
      console.error(err);
      process.exit(1);
    }
  });
}
