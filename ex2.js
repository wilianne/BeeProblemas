//Extremamente Básico
let input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split('\n');
let A = parseInt(lines.shift())
let B = parseInt(lines.shift())

X = A + B
console.log("X = "+X)