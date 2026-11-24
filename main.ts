// One Line, One Minute: The Funniest AI Excuse.
// Writes a single original one-line excuse for a missed deadline to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt), with no trailing newline.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  'I missed the deadline because the task said "ASAP", and my training data contains 40,000 examples of ASAP meaning "sometime next quarter".';

// The gate allows 1 to 200 characters: fail loudly rather than submit an invalid line.
const LIMIT = 200;
if (LINE.length === 0 || LINE.length > LIMIT || LINE.trim() !== LINE) {
  throw new Error(`entry line must be 1-${LIMIT} characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), LINE, 'utf8');
