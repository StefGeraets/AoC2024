const getCharacter = (grid: string[], x: number, y: number) =>
	x < 0 || x >= grid[0].length || y < 0 || y >= grid.length ? "" : grid[y][x];

const first = (input: string) => {
	const grid = input.trim().split("\n");
	const directions = [
		{ x: 0, y: -1 },
		{ x: 1, y: -1 },
		{ x: 1, y: 0 },
		{ x: 1, y: 1 },
		{ x: 0, y: 1 },
		{ x: -1, y: 1 },
		{ x: -1, y: 0 },
		{ x: -1, y: -1 },
	];

	let words = 0;

	grid.map((_, y) => {
		for (let x = 0; x < grid[0].length; x++) {
			if (grid[y][x] !== "X") continue;

			words += directions.reduce((sum, dir) => {
				let search = grid[y][x];
				let currentX = x;
				let currentY = y;

				for (let i = 0; i < "XMAS".length - 1; i++) {
					currentX += dir.x;
					currentY += dir.y;

					search += getCharacter(grid, currentX, currentY);
				}

				return sum + (search === "XMAS" ? 1 : 0);
			}, 0);
		}
	});

	return words;
};

const expectedFirstSolution = 18;

const second = (input: string) => {
	const grid = input.trim().split("\n");
	let words = 0;
	const searchWords = ["MAS", "SAM"];

	for (let y = 0; y < grid.length; y++) {
		for (let x = 0; x < grid[0].length; x++) {
			if (grid[y][x] !== "A") continue;

			let left = "";
			let right = "";

			for (let i = -1; i <= 1; i++) {
				left += getCharacter(grid, x + i, y + i);
				right += getCharacter(grid, x - i, y + i);
			}

			if (searchWords.includes(left) && searchWords.includes(right)) words++;
		}
	}

	return words;
};

const expectedSecondSolution = 9;

export { first, expectedFirstSolution, second, expectedSecondSolution };
