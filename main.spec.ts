import main from './main';
import { IRoomCombinations } from './main';

const sum = (result: string[], problem: IRoomCombinations) => result.length ? result.map(acc => problem.prices[acc]).reduce((a, b) => a + b) : -Infinity;

test('test case #1', () => {

	const problem: IRoomCombinations = {
		combinations: [['A', 'B', 'C']],
		allocations: { 'A': 1, 'B': 1, 'C': 1 },
		prices: { 'A': 100, 'B': 200, 'C': 300 },

	}

	const result = main(problem);
	const cost = sum(result, problem);

	console.log('TEST CASE #1', result, cost);

	expect(result).toEqual(['A']);
	expect(cost).toBe(100);
});

test('test case #2', () => {

	const problem: IRoomCombinations = {
		combinations: [['A', 'B',], ['A', 'C'], ['A', 'B', 'C',]],

		allocations: { 'A': 2, 'B': 1, 'C': 1 },
		prices: { 'A': 100, 'B': 200, 'C': 300 },

	}

	const result = main(problem);
	const cost = sum(result, problem);

	console.log('TEST CASE #2', result, cost);

	expect(result).toEqual(['A', 'A', 'B']);
	expect(cost).toBe(400);
});

test('test case #3', () => {

	const problem: IRoomCombinations = {
		combinations: [['A', 'B',], ['A', 'B', 'C'], ['A']],
		allocations: { 'A': 1, 'B': 1, 'C': 1 },
		prices: { 'A': 100, 'B': 200, 'C': 300 }
	}

	const result = main(problem);
	const cost = sum(result, problem);

	console.log('TEST CASE #3', result, cost);

	expect(result).toEqual(['B', 'C', 'A']);
	expect(cost).toBe(600);
});

test('test case #4', () => {

	const problem: IRoomCombinations = {
		combinations: [['A', 'B', 'C'], ['B'], ['A']],
		allocations: { 'A': 1, 'B': 1, 'C': 1 },
		prices: { 'A': 100, 'B': 200, 'C': 300 },

	}

	const result = main(problem);
	const cost = sum(result, problem);

	expect(result).toEqual(['C', 'B', 'A']);
	console.log('TEST CASE #4', result, cost);

	expect(cost).toBe(600);
});

test('test case #5', () => {

	const problem: IRoomCombinations = {
		combinations: [['A'], ['B'], ['C'], ['D']],
		allocations: { 'A': 1, 'B': 1, 'C': 1, D: 1 },
		prices: { 'A': 100, 'B': 200, 'C': 300, 'D': 400 },

	}

	const result = main(problem);
	const cost = sum(result, problem);

	expect(result).toEqual(['A', 'B', 'C', 'D']);
	console.log('TEST CASE #5', result, cost);

	expect(cost).toBe(1000);
});

test('test case #6', () => {

	const problem: IRoomCombinations = {
		combinations: [['A'], ['B'], ['A'], ['A']],
		allocations: { 'A': 1, 'B': 1, 'C': 1, D: 1 },
		prices: { 'A': 100, 'B': 200, 'C': 300, 'D': 400 },
	}

	const result = main(problem);
	const cost = sum(result, problem);

	console.log('TEST CASE #6', result);

	expect(result).toEqual([]);
	expect(cost).toBe(-Infinity);

});

test('test case #7', () => {

	const problem: IRoomCombinations = {
		combinations: [['A', 'C', 'D'], ['B', 'C'], ['A']],
		allocations: { 'A': 1, 'B': 1, 'C': 1, D: 1 },
		prices: { 'A': 100, 'B': 200, 'C': 300, 'D': 400 },
	}

	const result = main(problem);
	const cost = sum(result, problem);

	console.log('TEST CASE #7', result);

	expect(result).toEqual(['C', 'B', 'A']);
	expect(cost).toBe(600);

});


test('test case #8', () => {

	const problem: IRoomCombinations = {
		combinations: [['A'], ['C', 'D'], ['C', 'E', 'F',], ['A', 'B'], ['D', 'G', 'H',]],
		allocations: { 'A': 1, 'B': 1, 'C': 1, 'D': 1, 'E': 1, 'F': 1, 'G': 1, 'H': 1 },
		prices: { 'A': 100, 'B': 200, 'C': 300, 'D': 400, 'E': 500, 'F': 600, 'G': 700, 'H': 800 },
	}

	const result = main(problem);
	const cost = sum(result, problem);

	console.log('TEST CASE #8', result);

	expect(result).toEqual(['A', 'C', 'E', 'B', 'D']);
	expect(cost).toBe(1500);

});

test('test case #9', () => {

	const problem: IRoomCombinations = {
		combinations: [['A'], ['C', 'D'], ['C', 'E', 'F',], ['A', 'B'], ['D', 'G', 'H',]],
		allocations: { 'A': 1, 'B': 0, 'C': 1, 'D': 1, 'E': 1, 'F': 1, 'G': 1, 'H': 1 },
		prices: { 'A': 100, 'B': 200, 'C': 300, 'D': 400, 'E': 500, 'F': 600, 'G': 700, 'H': 800 },
	}

	const result = main(problem);
	const cost = sum(result, problem);

	console.log('TEST CASE #8', result);

	expect(result).toEqual([]);
	expect(cost).toBe(-Infinity);

});