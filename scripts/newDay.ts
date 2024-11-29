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

log(`creating template for day ${day}`);
const basePath = "days";

if (fs.existsSync(`${basePath}/${day}`)) {
	log(`day ${day} already exists`);
	process.exit(0);
}
const newDayPath = `${basePath}/${day}`;
fs.mkdirSync(newDayPath);
fs.copyFileSync(`${__dirname}/Puzzle.ts.tmpl`, `${newDayPath}/Puzzle.ts`);
fs.writeFileSync(`${newDayPath}/input.txt`, "");
fs.writeFileSync(`${newDayPath}/test.txt`, "");
