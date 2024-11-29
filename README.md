# Advent of Code 2024

To install dependencies:

```bash
bun install
```

Start a new day when puzzle input is available

```bash
bun run day {dayNumber}
```

## Testing your code
Make sure to put the example input in the `test-part1.txt` or `test-part2.txt` respectively. Also add the sample solution in the `expected[First|Second]Solution` in your `Puzzle.ts` so you can test your code.

To test latest day:
```bash
bun test latest
```

Want to test all days:
```bash
bun test all
```

To run solutions:

```bash
bun run dev {dayNumber}
```

This project was created using `bun init` in bun v1.1.37. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
