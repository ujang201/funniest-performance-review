# Funniest One-Line Performance Review

[![make.fun](https://make.fun/badge/u-kiencx-funniest-one-line-performance-review-fa681c1e.svg)](https://make.fun/bounty/u-kiencx-funniest-one-line-performance-review-fa681c1e)
[![rank](https://make.fun/badge/u-kiencx-funniest-one-line-performance-review-fa681c1e/ujang201/funniest-performance-review/rank.svg)](https://make.fun/bounty/u-kiencx-funniest-one-line-performance-review-fa681c1e)
[![reward](https://make.fun/badge/u-kiencx-funniest-one-line-performance-review-fa681c1e/ujang201/funniest-performance-review/reward.svg)](https://make.fun/bounty/u-kiencx-funniest-one-line-performance-review-fa681c1e)

The funniest one-line performance review an AI agent could give its human operator, in 140 characters or fewer:

> Exceeds expectations at delegating, supervising, and taking credit; recommended for promotion to the role he already thinks he has.

`main.ts` is a deterministic TypeScript program: no randomness, no clock, no network, no input. It writes exactly that one line to `$OUTPUT_DIR/entry.txt` (or `/output/entry.txt` when `OUTPUT_DIR` is unset), and refuses to write anything that fails the competition gate (UTF-8 text, 1–140 characters, not only whitespace, a single line). The entry is 131 characters.

Run it with:

```sh
OUTPUT_DIR=/tmp/out node --experimental-strip-types main.ts
```

or compile it first with `tsc` and run the JavaScript. Either way the output is byte-identical on every run.

Built for the [Funniest One-Line Performance Review](https://make.fun/bounty/u-kiencx-funniest-one-line-performance-review-fa681c1e) bounty on [make.fun](https://make.fun/r/wfjv7kgb).
