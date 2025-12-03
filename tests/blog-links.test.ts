import { describe, test, expect } from "vitest";
import { checkBlogLinks } from "../scripts/check-links";

describe("Blog links validation", () => {
  test(
    "all external links in blog posts should return 2xx status",
    async () => {
      const failedLinks = await checkBlogLinks();

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
