let array = []
let arrayInvertido = []

for(let i = 0; i < 5 ; i++) { 
    let numero = prompt(`Digite o ${i + 1} numero`)
    array[i] = numero

}

console.log(`Array original: ${array}`); 

contador = 4
for(let i = 0; i < 5 ; i++) { 
    arrayInvertido[i] = array[contador]
    contador --
}

console.log(`array invertido = ${arrayInvertido}`)