let num1 = parseInt( prompt("Digite o primeiro número")) 
let num2 = parseInt(prompt("Digite o segundo número"))
let operacao = parseInt(prompt("Escolha a operação que deseja realizar a conta: Soma = 1 , Subtração = 2, Multiplicação = 3, Divisão = 4 " ))


switch(operacao) {
    case 1: 
        console.log(num1 + " + " + num2 + " = " + (num1 + num2) ) 
        break;
    case 2: 
        console.log(num1 + " - " + num2 + " = " + (num1 - num2) ) 
        break;
    case 3:
        console.log(num1 + " * " + num2 + " = " + (num1 * num2) ) 
        break;
    case 4: 
        console.log(num1 + " / " + num2 + " = " + (num1 / num2) ) 
        break;
}