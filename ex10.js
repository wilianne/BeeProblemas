//Salario com Bonus
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let nome = lines.shift();
let salario_fixo = parseFloat(lines.shift());
let vendas = parseFloat(lines.shift());

let total = salario_fixo + (vendas * 0.15);
console.log("TOTAL = R$ "+total.toFixed(2));