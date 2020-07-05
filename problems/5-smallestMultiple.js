"use strict";

function findSmallestMultiple() {
	let i = 20;
	let flag = false;

	while (true) {
		for (let j = 2; j <= 20; j++) {
			if (i % j === 0) {
				if (j === 20) {
					flag = true;
					break;
                }
                console.log(i, j);
				continue;
            } else {
                break;
            }
		}
        if (flag) {
            break;
        }
		i++;
	}
	console.log(i);
}

findSmallestMultiple();
