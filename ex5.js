//Produto Simples
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseInt(lines.shift())
let B = parseInt(lines.shift())
prod = A * B
console.log("PROD = "+prod)