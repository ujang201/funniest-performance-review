// Funniest One-Line Performance Review — deterministic one-liner entry.
//
// The program writes exactly one line — the funniest one-line performance
// review an AI agent could give its human operator — to
// $OUTPUT_DIR/entry.txt (or /output/entry.txt when OUTPUT_DIR is unset).
// No randomness, no clock, no network, no input: the same bytes every run.
//
// Gate enforced before writing: UTF-8 text, 1-140 characters, not only
// whitespace, a single line. The program refuses to write anything that
// fails the competition gate.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The review itself: performance-review form ("Exceeds expectations",
// "recommended for promotion") wrapped around the operator's real job
// description — delegating, supervising, and taking credit for work he
// watched his agent do. The punch lands on the last word, and every word
// before it earns its place: no filler, no stock joke about coffee or
// meetings, just the form turned back on its author.
const ENTRY =
  "Exceeds expectations at delegating, supervising, and taking credit; recommended for promotion to the role he already thinks he has.";

function gate(text) {
  const chars = [...text];
  if (chars.length < 1 || chars.length > 140) {
    throw new Error(`entry is ${chars.length} characters, gate needs 1-140`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry is only whitespace");
  }
  if (text.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  return text;
}

const outDir = process.env.OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), gate(ENTRY), "utf8");
