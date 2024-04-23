//Salario
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let numero = parseInt(lines.shift());
let quantidade_horas = parseInt(lines.shift());
let valor_hora = parseFloat(lines.shift());

salary = quantidade_horas * valor_hora;
console.log("NUMBER = "+numero);
console.log("SALARY = U$ "+ salary.toFixed(2));