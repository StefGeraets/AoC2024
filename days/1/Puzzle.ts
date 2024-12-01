import { sumReducer } from "../../utils/utils";

const first = (input: string) => {
	const lines = input.trim().split("\n");
	const split = lines.map((line) => line.split(/\s+/));

	const listA: number[] = [];
	const listB: number[] = [];

	split.map((line) => {
		listA.push(Number(line[0]));
		listB.push(Number(line[1]));
	});

	listA.sort();
	listB.sort();

	const distances = listA.map((number, i) => Math.abs(number - listB[i]));

	return distances.reduce(sumReducer);
};

const expectedFirstSolution = 11;

const second = (input: string) => {
	const lines = input.trim().split("\n");
	const split = lines.map((line) => line.split(/\s+/));

	const listA: number[] = [];
	const listB: number[] = [];

	split.map((line) => {
		listA.push(Number(line[0]));
		listB.push(Number(line[1]));
	});

	const directions = listA.map(
		(number, i) => number * listB.filter((num) => number === num).length,
	);

	return directions.reduce(sumReducer);
};

const expectedSecondSolution = 31;

export { first, expectedFirstSolution, second, expectedSecondSolution };
