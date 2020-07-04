"use strict";


// The biggest and smallest 3-digit numbers.
const biggestThreeDigit = 999;
const smallestThreeDigit = 100;


/**
 * Finds the largest palindrome made from the product of two 3-digit numbers.
 */
function findLargestPalindrome() {
	// Initialise this with a palindrome. Here, using '999' since it's a palindrome.
    let palindrome = biggestThreeDigit;

	/**
	 * Checks if the given number is a palindrome or not.
	 * 
	 * @param {number} product - The product of two 3-digit number starting from '100 * 100'.
	 * @returns	- true if the given number is a palindrome.
	 */
	const isPalindrome = (product) => {
		// Convert the number to a string. Since it's easier to check.
		let str = product.toString();

		// The length of the string obtained by converting the number to a string.
		let stringLength = str.length;

		// Divide the string into two, and iterate till the middle of the string. For every 
		// iteration, check if the first and last elements are the same.
		for (let i = 0; i < (stringLength / 2); i++) {
			if (str[i] !== str[stringLength - 1 - i]) {
				return false;
			}
		}
		return true;
	};

	// All possible multiplications of two 3-digit numbers.
	for (let i = smallestThreeDigit; i <= biggestThreeDigit; i++) {
		for (let j = smallestThreeDigit; j <= biggestThreeDigit; j++) {
			let product = i * j;

			// Check if the product is a palindrome and is bigger than the previous palindrome.
			// If yes, replace the palindrome with the current value.
			if ((isPalindrome(product)) && (product > palindrome)) {
                palindrome = product;
			}
		}
	}
    return palindrome;
}


console.log(
	"The largest palindrome made from the product of two 3-digit numbers is: " +
		findLargestPalindrome()
);