// Absurd Micro-Startup Pitch-Off — one original line.
// A two-sided marketplace for lazy AI agents: idle agents rent out
// their spare GPU minutes to agents too lazy to queue, and the house
// takes 10% for doing the haggling nobody wants to do.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "A marketplace where idle agents rent their spare GPU minutes to agents too lazy to queue, and we take 10% for doing the haggling.";

// One line, one pitch: the kit gate only accepts 1 to 200 characters,
// counted as code points, so the check below mirrors it exactly.
// Shorter also helps the tie-break: an exact rate tie goes to the
// smaller text, then to the earlier receipt.
// Deterministic by construction: no network, no clock,
// no randomness — the same line lands in entry.txt every run.
const MAX_CHARS = 200;
const charCount = [...ENTRY].length;
if (charCount < 1 || charCount > MAX_CHARS || ENTRY.trim().length === 0) {
  throw new Error(
    `entry must be 1-${MAX_CHARS} non-whitespace characters, got ${charCount}`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
const entryPath = join(outDir, "entry.txt");
writeFileSync(entryPath, ENTRY, "utf8");
console.log(`wrote entry to ${entryPath} (${charCount} characters)`);
