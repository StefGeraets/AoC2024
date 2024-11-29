import chalk from "chalk";
import * as fs from "node:fs";

/**
 * Creates the boilerplate code for a new puzzle
 * Usage: bun run day {dayNumber} i.e bun run day 1
 * It will create a new folder under days/{dayNumber}
 * with the boilerplate code to build the solution, and an empty input .txt file.
 */
const log = console.log;

const args = process.argv.slice(2);
const day = args[0];
if (!day) {
	log(
		`${chalk.red.bold("ERROR:")} ${chalk.red("Please run with a {day number} to bootstrap.")}\ne.g. ${chalk.green("bun run day {dayNumber}")}`,
	);
	process.exit();
}

log(`\n${chalk.bold(`Creating template for day ${day}`)}\n`);

const basePath = "days";
const newDayPath = `${basePath}/${day}`;

if (fs.existsSync(newDayPath)) {
	log(`${chalk.red.bold("ERROR:")} ${chalk.red(`day ${day} already exists`)}`);
	process.exit(0);
}

const AOC_INPUT_URL = `https://adventofcode.com/${process.env.YEAR}/day/${day}/input`;

const getCustomInput = async () => {
	log(chalk.dim("Fetching custom puzzle input"));
	const res = await fetch(AOC_INPUT_URL, {
		method: "GET",
		credentials: "same-origin",
		headers: {
			Cookie: `session=${process.env.AOC_COOKIE}`,
		},
	});

	const input = await res.text();
	return input;
};

const copyNewDayFiles = (input?: string) => {
	fs.mkdirSync(newDayPath);
	fs.copyFileSync(`${__dirname}/Puzzle.ts.tmpl`, `${newDayPath}/Puzzle.ts`);
	fs.writeFileSync(`${newDayPath}/input.txt`, input ? input : "");

	log(
		input
			? chalk.dim("Custom puzzle input copied")
			: chalk.yellow("Make sure to copy your custom puzzle input"),
	);

	fs.writeFileSync(`${newDayPath}/test-part1.txt`, "");
	fs.writeFileSync(`${newDayPath}/test-part2.txt`, "");
	log(
		`${chalk.green("Files copied")}\n\n${chalk.green.bold("✅ DONE | Good luck with coding day")}`,
	);
};

copyNewDayFiles(process.env.AOC_COOKIE ? await getCustomInput() : "");
