import { sumReducer } from "../../utils/utils";

const mulFunc = (mul: string) => {
	const a = mul.substring(mul.indexOf("(") + 1, mul.indexOf(","));
	const b = mul.substring(mul.indexOf(",") + 1, mul.indexOf(")"));

	return Number(a) * Number(b);
};

const first = (input: string) => {
	const mulExpression = /(mul\(\d+,\d+\))/gm;
	const muls = input.trim().match(mulExpression);

	const results = muls?.map(mulFunc);

	return results?.reduce(sumReducer);
};

const expectedFirstSolution = 161;

const second = (input: string) => {
	const memoryExpression = /(mul\(\d{1,4},\d{1,4}\))|(do\(\))|(don't\(\))/gm;
	const doExpression = /(do\(\))/gm;
	const dontExpression = /(don't\(\))/gm;
	const memory = input.trim().match(memoryExpression);

	let ignore = false;

	const results = memory?.map((m) => {
		if (dontExpression.test(m)) {
			ignore = true;
		} else if (doExpression.test(m)) {
			ignore = false;
		} else if (!ignore) {
			return mulFunc(m);
		}

		return;
	});

	return results
		?.filter((notUndefined) => notUndefined !== undefined)
		.reduce(sumReducer);
};

const expectedSecondSolution = 48;

export { first, expectedFirstSolution, second, expectedSecondSolution };
