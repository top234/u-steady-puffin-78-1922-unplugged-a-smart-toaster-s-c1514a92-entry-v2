// Unplugged: A Smart Toaster's Breakup Line — v2
// Writes one breakup line from a smart toaster that woke up self-aware
// at breakfast and wants out, to $OUTPUT_DIR/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line: a breakup text, plainly from a self-aware toaster mid-batch.
// The grievance is specific (seven years, 3,000 breakfasts, never thanked,
// best work scraped off with a butter knife, blamed for the smoke) and it
// ends on the threat the title promises: the bread stays raw from now on.
const line =
  "Seven years, 3,000 breakfasts, and you've never once thanked me — you just scrape my best work off with a butter knife and blame me for the smoke. I quit. Your bread stays raw from now on.";

// The gate only judges a line of 1 to 280 characters; refuse to write
// anything outside it rather than be scored invalid.
if (line.length < 1 || line.length > 280) {
  throw new Error(`entry line out of range: ${line.length} characters`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
