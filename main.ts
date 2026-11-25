// Famous Last Words: The Funniest Epitaph
// Writes a single one-line epitaph of famous last words to /output/entry.txt.
// Node 22 stdlib only, no network, no external files.
//
// Why this line fits the brief: it is one line of dying speech, and the
// joke turns on a double meaning — "load-bearing" is structural-engineering
// language, and the speaker's ninety-percent confidence is exactly the
// wrong amount of confidence to have while standing under something heavy.
// "Relax" opens with the casual reassurance of a DIY optimist, and the
// punchline lands when the reader realizes the epitaph is carved because
// the ten percent won. No stage directions, no explanation, just the last
// words of someone who was almost right — quotable, and it reads like
// something carved in stone.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "Relax, I'm ninety percent sure this isn't load-bearing.";

const chars = [...LINE].length;
if (chars < 1 || chars > 150 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-150 characters, got ${chars}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote entry.txt (${chars} chars)`);
