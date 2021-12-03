import fs from 'fs';

let input = fs.readFileSync('input.txt').toString().split('\n').map(n => Number(n));
let howManyInc = 0;

input.forEach(function (item, index, array) {
	if (index > 0) {
		if (input[index - 1] < input[index]) {
			howManyInc++;
		}
	}
});

console.log('Incease Count: ' + howManyInc);