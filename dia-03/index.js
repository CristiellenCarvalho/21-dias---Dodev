let nome = prompt("Digite seu nome:"); 
let idade = parseInt(prompt("Digite sua idade:"));
let altura = parseFloat(prompt("Digite sua altura e separe por ponto. Exemplo 1.60 :")); 
let peso = parseInt(prompt("Digite seu peso"));
let anoNascimento = 2024 - idade; 

let IMC = peso / (altura * altura);

console.log(`Olá ${nome}, você tem ${idade} anos, nasceu em ${anoNascimento}, tem ${altura} de altura, pesa ${peso}kg. Seu IMC é: ${IMC}`);
