//Media 2
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseFloat(lines.shift())
let B = parseFloat(lines.shift())
let C = parseFloat(lines.shift())

media = (A * 2 + B * 3 + C * 5)/10

console.log("MEDIA = "+media.toFixed(1))