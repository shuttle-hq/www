import { readFileSync, readdirSync, existsSync } from "fs";
import { join, basename } from "path";

const LINK_REGEX = /(?:href=["']|]\()([^"'\s)]+)/g;
const MD_LINK_REGEX = /\[.*?\]\((https?:\/\/[^\s)]+)\)/g;
const RAW_URL_REGEX = /(?<![(\[`])https?:\/\/[^\s<>"'`)\]]+/g;

const SKIP_PATTERNS = [
  /^https?:\/\/127\.0\.0\.1/,
  /^https?:\/\/localhost/,
  /^https?:\/\/your-/,
  /^https?:\/\/[^/]+\.shuttle\.app/,
  /\{.*\}/,
];

export function extractLinks(content: string): string[] {
  const links = new Set<string>();
  let match: RegExpExecArray | null;

  while ((match = LINK_REGEX.exec(content)) !== null) {
    if (match[1].startsWith("http")) links.add(match[1]);
  }
  while ((match = MD_LINK_REGEX.exec(content)) !== null) {
    links.add(match[1]);
  }
  while ((match = RAW_URL_REGEX.exec(content)) !== null) {
    links.add(match[0]);
  }

  return Array.from(links);
}

export function shouldSkipUrl(url: string): boolean {
  return SKIP_PATTERNS.some((p) => p.test(url));
}

export async function checkUrl(
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

export async function checkUrlsWithConcurrency(
  urls: string[],
  concurrency: number,
  logEveryN = 100,
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
      if (completed % logEveryN === 0) {
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

export interface LinkCheckResult {
  url: string;
  status: number | string;
  files: string[];
}

export async function checkBlogLinks(
  blogFiles?: string[],
): Promise<LinkCheckResult[]> {
  const blogDir = join(process.cwd(), "_blog");

  const files = blogFiles?.length
    ? blogFiles.map((f) => (f.endsWith(".mdx") ? f : `${f}.mdx`))
    : readdirSync(blogDir).filter((f) => f.endsWith(".mdx"));

  const allLinks: Array<{ file: string; url: string }> = [];

  for (const filename of files) {
    const filepath = join(blogDir, filename);
    if (!existsSync(filepath)) {
      console.error(`File not found: ${filepath}`);
      continue;
    }
    const content = readFileSync(filepath, "utf8");
    const links = extractLinks(content);

    for (const url of links) {
      if (!shouldSkipUrl(url)) {
        allLinks.push({ file: basename(filename), url });
      }
    }
  }

  const uniqueUrls = Array.from(new Set(allLinks.map((l) => l.url)));
  const results = await checkUrlsWithConcurrency(uniqueUrls, 10);

  return results
    .filter((r) => !r.ok)
    .map((r) => ({
      url: r.url,
      status: r.status,
      files: allLinks.filter((l) => l.url === r.url).map((l) => l.file),
    }));
}

// CLI entry point
if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);

  if (args.includes("--help") || args.includes("-h")) {
    console.log(`Usage: bun run scripts/check-links.ts [files...]

Check external links in blog posts.

Examples:
  bun run scripts/check-links.ts                    # Check all blog posts
  bun run scripts/check-links.ts 2025-12-02-*.mdx   # Check specific file
  bun run scripts/check-links.ts my-post            # Check by partial name
`);
    process.exit(0);
  }

  const blogDir = join(process.cwd(), "_blog");
  let files: string[] = [];

  if (args.length > 0) {
    const allBlogFiles = readdirSync(blogDir).filter((f) => f.endsWith(".mdx"));
    for (const arg of args) {
      const matches = allBlogFiles.filter((f) => f.includes(arg));
      if (matches.length === 0) {
        console.error(`No blog files matching: ${arg}`);
      } else {
        files.push(...matches);
      }
    }
    files = Array.from(new Set(files));
  }

  checkBlogLinks(files.length > 0 ? files : undefined).then((failedLinks) => {
    if (failedLinks.length > 0) {
      console.log("\nBroken links found:");
      for (const link of failedLinks) {
        console.log(`  ${link.url} (${link.status})`);
        console.log(`    in: ${link.files.join(", ")}`);
      }
      process.exit(1);
    } else {
      console.log("\nAll links OK!");
    }
  });
}
