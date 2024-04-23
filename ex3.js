//Área do Círculo
let input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split('\n');
let raio = parseFloat(lines.shift())
const pi = 3.14159
raio = raio * raio
area = pi * raio
console.log("A="+(area.toFixed(4)))