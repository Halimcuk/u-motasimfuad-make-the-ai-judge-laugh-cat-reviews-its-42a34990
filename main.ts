// Make the AI Judge Laugh: Cat Reviews Its Human
// A deterministic program: it writes one funny single-line one-star review,
// written by a house cat about its human, to entry.txt in the output folder.
// The same line comes out on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line: a one-star review from a house cat. The bowl is half full,
// which in cat is empty, and the cat has escalated the matter to the dog.
// (Half full is the cat's definition of an empty bowl; the dog is the only
// authority in the house who pretends to listen.)
const ENTRY =
  "One star. My human refills my bowl only when it is half full, which is cat for empty. I have filed a formal complaint with the dog.";

// The output folder comes from MAKEFUN_OUTPUT_DIR, falling back to a folder
// named "output" at the filesystem root when the variable is not set.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Create the output folder if it does not exist, then write the entry line
// as UTF-8 text with no trailing newline.
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");

// Print the entry line and its character count to the console.
console.log(ENTRY);
console.log(`Characters: ${ENTRY.length}`);
