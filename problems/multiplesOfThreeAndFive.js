"use strict";

function multiplesOfThreeAndFive(upto) {
    let sum = 0;
    for (let i = 0; i < upto; i++) {
        if ((i % 3 === 0) || (i % 5 === 0)) {
            sum += i;
        }
    }
    return sum;
}

console.log(multiplesOfThreeAndFive(1000));