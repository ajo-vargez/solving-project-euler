"use strict";


// The number whose prime factors are to be found.
const theNumber = 600851475143;


/**
 * Finds the prime factors of the given number.
 *
 * @param {number} theNumber - The number whose largest prime factors are to be found.
 * @returns - The largest prime factor of any given number.
 */
function findPrimeFactorsOf(theNumber) {
    // Start iterating from 2 since any number divided by 1 is the same number.
    // Using the 'sieve of eratosthenes' algorithm.
	for (let i = 2; i < Math.sqrt(theNumber); i++) {
		if (theNumber % i === 0) {
			theNumber = theNumber / i;
		}
	}
	return theNumber;
}


console.log(
	"The largest prime factor of " +
		theNumber +
		" is = " +
		findPrimeFactorsOf(theNumber)
);