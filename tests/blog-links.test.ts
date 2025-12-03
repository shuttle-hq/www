import { describe, test, expect } from "vitest";
import { readFileSync, readdirSync } from "fs";
import { join } from "path";

const LINK_REGEX = /(?:href=["']|]\()([^"'\s)]+)/g;
const MD_LINK_REGEX = /\[.*?\]\((https?:\/\/[^\s)]+)\)/g;
const RAW_URL_REGEX = /(?<![(\[`])https?:\/\/[^\s<>"'`)\]]+/g;

// Skip localhost/example URLs that won't resolve
const SKIP_PATTERNS = [
  /^https?:\/\/127\.0\.0\.1/,
  /^https?:\/\/localhost/,
  /^https?:\/\/your-/,
  /^https?:\/\/[^/]+\.shuttle\.app/, // Skip deployed shuttle apps that may not exist
  /\{.*\}/, // Skip URLs with template variables
];

function extractLinks(content: string): string[] {
  const links = new Set<string>();

  let match: RegExpExecArray | null;

  while ((match = LINK_REGEX.exec(content)) !== null) {
    const url = match[1];
    if (url.startsWith("http")) links.add(url);
  }

  while ((match = MD_LINK_REGEX.exec(content)) !== null) {
    links.add(match[1]);
  }

  while ((match = RAW_URL_REGEX.exec(content)) !== null) {
    links.add(match[0]);
  }

  return Array.from(links);
}

function shouldSkipUrl(url: string): boolean {
  return SKIP_PATTERNS.some((p) => p.test(url));
}

async function checkUrl(
  url: string,
): Promise<{ url: string; status: number; ok: boolean }> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 30000);

  try {
    const res = await fetch(url, {
      method: "HEAD",
      signal: controller.signal,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
      redirect: "follow",
    });

    if (!res.ok && res.status === 405) {
      // HEAD not allowed, try GET
      const getRes = await fetch(url, {
        method: "GET",
        signal: controller.signal,
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        },
        redirect: "follow",
      });
      return { url, status: getRes.status, ok: getRes.ok };
    }

    return { url, status: res.status, ok: res.ok };
  } finally {
    clearTimeout(timeout);
  }
}

const LOG_EVERY_N = 100;

async function checkUrlsWithConcurrency(
  urls: string[],
  concurrency: number,
): Promise<Array<{ url: string; status: number | string; ok: boolean }>> {
  const results: Array<{ url: string; status: number | string; ok: boolean }> =
    [];
  const queue = [...urls];
  const total = urls.length;
  let completed = 0;

  console.log(`Checking ${total} links...`);

  async function worker() {
    while (queue.length > 0) {
      const url = queue.shift();
      if (!url) break;

      try {
        const result = await checkUrl(url);
        results.push(result);
      } catch (err) {
        results.push({
          url,
          status: err instanceof Error ? err.message : "Network error",
          ok: false,
        });
      }

      completed++;
      if (completed % LOG_EVERY_N === 0) {
        console.log(`Checked ${completed}/${total} links...`);
      }
    }
  }

  const workers = Array(concurrency)
    .fill(null)
    .map(() => worker());
  await Promise.all(workers);

  console.log(`Checked ${completed}/${total} links (done)`);
  return results;
}

describe("Blog links validation", () => {
  test(
    "all external links in blog posts should return 2xx status",
    async () => {
      const blogDir = join(process.cwd(), "_blog");
      const files = readdirSync(blogDir).filter((f) => f.endsWith(".mdx"));

      const allLinks: Array<{ file: string; url: string }> = [];

      for (const filename of files) {
        const filepath = join(blogDir, filename);
        const content = readFileSync(filepath, "utf8");
        const links = extractLinks(content);

        for (const url of links) {
          if (!shouldSkipUrl(url)) {
            allLinks.push({ file: filename, url });
          }
        }
      }

      const uniqueUrls = Array.from(new Set(allLinks.map((l) => l.url)));
      const results = await checkUrlsWithConcurrency(uniqueUrls, 10);

      const failedLinks = results
        .filter((r) => !r.ok)
        .map((r) => ({
          url: r.url,
          status: r.status,
          files: allLinks.filter((l) => l.url === r.url).map((l) => l.file),
        }));

      if (failedLinks.length > 0) {
        const errorMessage = failedLinks
          .map((l) => `${l.url} (${l.status}) in: ${l.files.join(", ")}`)
          .join("\n");

        expect(failedLinks, `Broken links found:\n${errorMessage}`).toEqual([]);
      }
    },
    { timeout: 300000 },
  );
});
