const numeros = [];
const indice = [];
let contador = 0


const numeroEscolhido = prompt("Digite um numero a ser encontrado")

for(let i = 0; i <10; i++) {
    const elemento = parseInt(prompt(`Digite o elemento ${i + 1}: `))
    numeros[i] = elemento;
}

for(let i = 0; i < 10 ; i++) { 
    if(numeros[i] === numeroEscolhido) { 
        indice[contador] = i
        contador++ 
    }
}

console.log(`O número ${numeroEscolhido} foi encontrado nos indices: ${indice}`)