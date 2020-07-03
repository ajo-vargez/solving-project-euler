"use strict";


const biggestThreeDigitNumber = 999;
const smallestThreeDigitNumber = 100;


function findLargestPalindrome() {
    let arrayOfPalindromes = [];

    for (let i = smallestThreeDigitNumber; i <= biggestThreeDigitNumber; i++) {
        for (let j = smallestThreeDigitNumber; j <= biggestThreeDigitNumber; j++) {
            let product = i * j;
            if (checkForPalindrome(product)) {
                arrayOfPalindromes.push(product);
            }
        }
    }

    // find the biggest palindrome.
    return (Math.max(...arrayOfPalindromes));
}


function checkForPalindrome(product) {
    let str = product.toString();
    let stringLength = str.length;
    for (let i = 0; i < (stringLength / 2); i++) {
        if (str[i] !== str[stringLength - 1 - i]) {
            return false;
        }
    }
    return true;
}


console.log("The largest palindrome made from the product of two 3-digit numbers is = "
    + findLargestPalindrome());