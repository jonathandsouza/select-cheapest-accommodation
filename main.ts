export interface IRoomCombinations {
	allocations: { [key: string]: number };
	prices: { [key: string]: number }
	combinations: Array<Array<string>>
	min?: number;
}

function solve(problem: IRoomCombinations) {
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

		if (totalPrice > min) {
			return solution;
		}

		if (totalPrice < tempMinPrice) {
			tempMinPrice = totalPrice;
			solution = tempSolution;
		}
	}

	return solution;
}

function main(problem: IRoomCombinations) {

	return solve(problem);

}

export default main;


