"use strict";


// Find the prime factor of a number.
const theNumber = 600851475143;


/**
 * Find the prime factors.
 * 
 * @param {number} theNumber - The number whose largest prime factors are to be found.
 */
function findPrimeFactorsOf(theNumber) {
    let n = theNumber;
    // Start i from 2 since any number divided by 1 is the same number.
    for (let i = 2; i < Math.sqrt(n); i++){
        if ((n % i) === 0) {
            n = n / i;
        }
    }
    return n;
}


console.log("The largest prime factor of " + theNumber + " is = " + findPrimeFactorsOf(theNumber));