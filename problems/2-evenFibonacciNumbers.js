"use strict";


// The limit upto which we need to find the fibonacci terms. 4 million.
const upto = 4000000;


/**
 * Find fibonacci terms upto a certain limit.
 *
 * @param {number} upperbound - The number upto which fibonacci terms need to be found.
 * @returns - The array of fibonacci terms.
 */
function getFibonacciTerms(upperbound) {
	// Initialise the fibonacci terms starting from 1 and 2.
	let fibonacciSequence = [1, 2];

	// Start the iteration from 2 since we're starting from 1 and 2.
	let i = 2;

	// Iterate untill you get all the fibonacci terms which are less than the upperbound.
	while (true) {
		let sumOfTheTwoNumbers =
			fibonacciSequence[i - 1] + fibonacciSequence[i - 2];

		// If the fibonacci term is greater than the upperbound which is 4 million, don't add it to
		// the array.
		if (sumOfTheTwoNumbers > upperbound) {
			break;
		}
		fibonacciSequence[i] = sumOfTheTwoNumbers;
		i++;
	}
	return fibonacciSequence;
}


/**
 * Find the sum of even fibonacci numbers from the input array.
 *
 * @param {number[]} fibonacciSequence - An array of fibonacci terms less than 4 million.
 * @returns - The sum of even fibonacci numbers.
 */
const sumOfEvenFibonacciNumbers = (fibonacciSequence) => {
	// Initialise the sum.
	let sumOfEvenFibonacciNumbers = 0;
	for (let i = 0; i < fibonacciSequence.length; i++) {
		// Check if the fibonacci term is an even number. If so, add it to the sum.
		if (fibonacciSequence[i] % 2 === 0) {
			sumOfEvenFibonacciNumbers += fibonacciSequence[i];
		}
	}
	return sumOfEvenFibonacciNumbers;
};


console.log(
	"The sum of even fibonacci numbers which are less than " +
		upto +
		" are " +
		sumOfEvenFibonacciNumbers(getFibonacciTerms(upto))
);
