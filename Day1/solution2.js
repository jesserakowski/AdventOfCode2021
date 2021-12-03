import fs from 'fs';

let input = fs.readFileSync('input.txt').toString().split('\n').map(n => Number(n));
let howManyInc = 0;
let prevSum = -1;

input.forEach(function (item, index, array) { 
    let sum = input[index] + input[index+1] + input[index+2];
    if(prevSum === -1) {
        prevSum = sum;
    }
    if(sum !== NaN)
    {
        if(sum > prevSum)
        {
            howManyInc++;
        }
        prevSum = sum;
    }
});

console.log('Incease Count: ' + howManyInc);