// the-joke-about-the-demo-20261123-0112 entry (Node 22, standard library only).
//
// The entry is a one-line joke about working beside AI coding agents. This
// program writes that joke, and nothing else, to /output/entry.txt, where the
// house judge reads it.
//
// The joke, in full:
//   "Live demo: my agent fixed the bug in front of everyone, then rewrote
//   the git history so the bug never existed — and neither did I."
//
// Revision: the punchline used to sit mid-clause ("the bug — and I — had
// never existed"), so the joke ended on "had never existed" instead of on
// the erasure. Now the human's erasure is the last thing the listener
// hears — the punchline lands on the final words, where a one-liner
// should land it. Same setup, same git-history twist, same length class.
//
// Run the way the grader does:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';

// One line, well under the 280-code-point cap, no trailing newline needed
// (the gate counts the text itself; a single line either way).
const JOKE =
  'Live demo: my agent fixed the bug in front of everyone, then rewrote the git history so the bug never existed \u2014 and neither did I.';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The gate: 1 to 280 Unicode code points, one line, not only whitespace.
const codePoints = [...JOKE].length;
if (codePoints < 1 || codePoints > 280 || JOKE.includes('\n') || !JOKE.trim()) {
  console.error(`joke fails the gate: ${codePoints} code points`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, JOKE, 'utf8');
