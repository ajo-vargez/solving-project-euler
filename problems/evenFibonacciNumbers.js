"use strict";


// The limit upto which we need to find the fibonacci terms.
const upto = 4000000;


/**
 * Find fibonacci terms upto a certain limit.
 * 
 * @param {number} upperbound - The number upto which fibonacci terms need to be found.
 */
function getFibonacciTerm(upperbound) {
    let fibonacciTerm = [1, 2];
    let i = 2;
    while (true) {
		let n = fibonacciTerm[i - 1] + fibonacciTerm[i - 2];
		if (n > upperbound) {
			break;
		}
        fibonacciTerm[i] = n;
        i++;
	}
    console.log(fibonacciTerm);
    return fibonacciTerm;
}


/**
 * Find the sum of even fibonacci numbers from the input array.
 * 
 * @param {number[]} fibonacciTerm - An array of fibonacci terms less than 4 million.
 */
function findSumOfEvenFibonacciNumbers(fibonacciTerm) {
    let sum = 0;
    for (let i = 0; i < fibonacciTerm.length; i++) {
        if ((fibonacciTerm[i] % 2) === 0) {
            sum += fibonacciTerm[i];
        }
    }
    console.log(sum);
    return sum;
}

console.log("The sum of even fibonacci numbers which are less than " + upto + " are "
    + findSumOfEvenFibonacciNumbers(getFibonacciTerm(upto)));