const first = (input: string) => {
	const reports = input.trim().split("\n");
	const reportLevels = reports.map((level) => level.split(" ").map(Number));

	const isReportSafe = reportLevels.map((report) => {
		const diffs = report.slice(1).map((level, i) => level - report[i]);
		const isIncreasing = diffs[0] > 0;

		return diffs.every(
			(diff) =>
				Math.abs(diff) >= 1 && Math.abs(diff) <= 3 && diff > 0 === isIncreasing,
		);
	});

	return isReportSafe.filter((val) => val === true).length;
};

const expectedFirstSolution = 2;

const second = (input: string) => {
	const reports = input.trim().split("\n");
	const reportLevels = reports.map((level) => level.split(" ").map(Number));

	const isReportSafe = (report: number[]) => {
		const diffs = report.slice(1).map((level, i) => level - report[i]);
		const isIncreasing = diffs[0] > 0;

		return diffs.every(
			(diff) =>
				Math.abs(diff) >= 1 && Math.abs(diff) <= 3 && diff > 0 === isIncreasing,
		);
	};

	const isSafeWithOneRemoval = (report: number[]) =>
		report.some((_, i) =>
			isReportSafe(report.slice(0, i).concat(report.slice(i + 1))),
		);

	return reportLevels.filter(
		(report) => isReportSafe(report) || isSafeWithOneRemoval(report),
	).length;
};

const expectedSecondSolution = 4;

export { first, expectedFirstSolution, second, expectedSecondSolution };
