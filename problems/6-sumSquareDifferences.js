"use strict";

const upto = 100;

const arrayOfNaturalNumbers = (lengthOfTheNumber) => {
	let arr = [];
	for (let i = 0; i < lengthOfTheNumber; i++) {
		arr[i] = i + 1;
    }
	return arr;
};

const sumOfSquares = (naturalNumbers) => {
	for (let i = 0; i < naturalNumbers.length; i++) {
		naturalNumbers[i] *= naturalNumbers[i];
    }
    return sumArrays(naturalNumbers);
};

const squareOfSums = (naturalNumbers) => {
    let sumOfArray = sumArrays(naturalNumbers);
    return sumOfArray * sumOfArray;
};

function sumArrays(arrayOfNaturalNumbers) {
    return arrayOfNaturalNumbers.reduce((a, b) => a + b, 0);
}

console.log(
	squareOfSums(arrayOfNaturalNumbers(upto)) -
		sumOfSquares(arrayOfNaturalNumbers(upto))
);