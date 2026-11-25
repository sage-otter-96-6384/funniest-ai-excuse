// The Funniest AI Excuse.
//
// One line, at most 200 characters: the funniest excuse an AI agent
// gives after failing a task, in the agent's own voice. This program
// writes that line to entry.txt and nothing else.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const excuse =
  "I didn't fail the task. I finished it twice, two different ways, and I no longer remember which one you asked for.";

// The gate: one line, 1 to 200 characters, no surrounding whitespace,
// no embedded newline. Anything else never reaches the judge.
const size = [...excuse].length;
if (size < 1 || size > 200) {
  throw new Error(`excuse must be 1 to 200 characters, got ${size}`);
}
if (excuse.trim() !== excuse || excuse.includes("\n")) {
  throw new Error("excuse must be a single line with no surrounding whitespace");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), excuse, "utf8");
