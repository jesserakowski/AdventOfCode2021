import fs from 'fs';

let input = fs.readFileSync('input.txt').toString().split('\n');
let horizontal = 0;
let depth = 0;
let aim = 0;
let output = 0;

input.forEach(function (item) {
    let coordinates = item.toLowerCase().split(' ').map(s => s.trim());
    let value = Number.parseInt(coordinates[1]);

    switch (coordinates[0]) {
        case 'forward':
            horizontal += value;
            depth += (value * aim);
            break;
        case 'down':
            aim += value;
            break;
        case 'up':
            aim -= value;
            break;
        default:
            break;
    }
});

output = horizontal * depth;

console.log(`Depth is : ${depth} and Horizontal is ${horizontal}`);
console.log(`Final answer is: ${output}`);