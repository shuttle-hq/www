import { readFileSync, writeFileSync, readdirSync } from "fs";
import { join } from "path";

const blogDir = join(process.cwd(), "_blog");

// Problematic Unicode characters that should be regular ASCII
const problematicChars: Record<string, string> = {
  "\u2018": "'", // Left single quotation mark
  "\u2019": "'", // Right single quotation mark
  "\u201C": '"', // Left double quotation mark
  "\u201D": '"', // Right double quotation mark
  "\u2013": "-", // En dash
  "\u2026": "...", // Horizontal ellipsis
  "\u00A0": " ", // Non-breaking space
};

function fixBlogFiles() {
  console.log("🔍 Scanning blog files for problematic Unicode characters...");

  const files = readdirSync(blogDir);
  let fixedFiles = 0;
  let totalReplacements = 0;

  files.forEach((filename) => {
    const filepath = join(blogDir, filename);

    try {
      const originalContent = readFileSync(filepath, "utf8");
      let fixedContent = originalContent;
      let fileReplacements = 0;

      // Replace problematic characters
      for (const [char, replacement] of Object.entries(problematicChars)) {
        const regex = new RegExp(char, "g");
        const matches = (fixedContent.match(regex) || []).length;
        if (matches > 0) {
          fixedContent = fixedContent.replace(regex, replacement);
          fileReplacements += matches;
          console.log(
            `  📝 ${filename}: Replaced ${matches} instances of ${char} with ${replacement}`,
          );
        }
      }

      // Write back if changes were made
      if (fileReplacements > 0) {
        writeFileSync(filepath, fixedContent, "utf8");
        fixedFiles++;
        totalReplacements += fileReplacements;
        console.log(`  ✅ ${filename}: Fixed ${fileReplacements} characters`);
      }
    } catch (error) {
      console.error(`  ❌ Error processing ${filename}:`, error);
    }
  });

  console.log(
    `\n🎉 Completed! Fixed ${totalReplacements} characters across ${fixedFiles} files.`,
  );

  if (fixedFiles === 0) {
    console.log(
      "✨ No problematic characters found. All blog files are clean!",
    );
  }
}

fixBlogFiles();
