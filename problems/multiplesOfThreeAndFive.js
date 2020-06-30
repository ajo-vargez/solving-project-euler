"use strict";


/**
 * 
 * @param {Number} upto - The number upto which we need to find the multiples of 3 & 5.
 * @returns - The sum of all the multiples of 3 & 5 from 0 to 'upto'.
 */
function multiplesOfThreeAndFive(upto) {
    let sum = 0;
    for (let i = 0; i < upto; i++) {
        if ((i % 3 === 0) || (i % 5 === 0)) {
            sum += i;
        }
    }
    return sum;
}


// call the function with the parameter.
console.log(multiplesOfThreeAndFive(1000));