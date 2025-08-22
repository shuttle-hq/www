import { describe, test, expect } from "vitest";
import { readFileSync, readdirSync } from "fs";
import { join } from "path";

describe("Blog files encoding validation", () => {
  test("all files in _blog directory should not contain smart quotes or other problematic Unicode characters", () => {
    const blogDir = join(process.cwd(), "_blog");
    const files = readdirSync(blogDir);

    const filesWithIssues: Array<{ file: string; issues: string[] }> = [];

    // Problematic Unicode characters that should be regular ASCII
    const problematicChars: Record<string, string> = {
      "\u2018": "'", // Left single quotation mark
      "\u2019": "'", // Right single quotation mark
      "\u201C": '"', // Left double quotation mark
      "\u201D": '"', // Right double quotation mark
      "\u2013": "-", // En dash
      "\u2026": "...", // Horizontal ellipsis
    };

    files.forEach((filename) => {
      const filepath = join(blogDir, filename);

      try {
        const content = readFileSync(filepath, "utf8");

        const foundChars: string[] = [];
        for (const [char, replacement] of Object.entries(problematicChars)) {
          if (content.includes(char)) {
            foundChars.push(`${char} (should be ${replacement})`);
          }
        }

        if (foundChars.length > 0) {
          filesWithIssues.push({
            file: filename,
            issues: foundChars,
          });
        }
      } catch (error) {
        filesWithIssues.push({
          file: filename,
          issues: ["Failed to read file as UTF-8"],
        });
      }
    });

    if (filesWithIssues.length > 0) {
      const errorMessage = filesWithIssues
        .map((item) => `${item.file}: ${item.issues.join(", ")}`)
        .join("\n");

      expect(
        filesWithIssues,
        `Found problematic characters in:\n${errorMessage}\n\nTo fix these issues automatically, run: npm run fix-blogs`,
      ).toEqual([]);
    }
  });
});
