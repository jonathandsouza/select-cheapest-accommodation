export interface IRoomCombinations {
	allocations: { [key: string]: number };
	prices: { [key: string]: number }
	combinations: Array<Array<string>>
	min?: number;
}

const performance = {
	solveCalled: 0,
}

function solve(problem: IRoomCombinations) {

	performance.solveCalled++;

	const { allocations, prices, combinations, min = Infinity } = problem;

	let availableAcc = combinations[0].filter(room => allocations[room] >= 1);

	if (availableAcc.length === 0) {
		return [];
	}

	if (combinations.length === 1) {
		return [availableAcc[0]];
	}

	let tempMinPrice = min;
	let solution: string[] = [];

	for (var i = 0; i < availableAcc.length; i++) {

		let acc = availableAcc[i];

		let tempSolution = [acc,
			...solve({
				allocations: {
					...allocations,
					...{ [acc]: allocations[acc] - 1 }
				},
				prices,
				combinations: combinations.slice(1),
				min: tempMinPrice
			})];

		if (tempSolution.length < combinations.length) {
			continue;
		}

		let totalPrice = tempSolution.map(acc => prices[acc]).reduce((a, b) => a + b);

		if (totalPrice >= min) {
			return solution;
		}

		if (totalPrice < tempMinPrice) {
			tempMinPrice = totalPrice;
			solution = tempSolution;
		}
	}

	return solution;
}

/*
	Assumptions:
	1. all accommodations should have prices.
	2. all accommodations should have allocations.
	3. The accommodation choices in each room should be ascending  order of price. (low to high) 

*/
function main(problem: IRoomCombinations) {

	performance.solveCalled = 0;
	const result = solve(problem);
	console.log('performance:', performance);
	return result;
}

export default main;


