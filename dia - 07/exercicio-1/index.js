let contador = 1 
let homens = 0
let quantidadeMulheresAcima7 = 0
let maiorNotaHomens = 0
let mediaGeral = 0 

while(contador <= 5) { 
   let nota = Number(prompt("Digite a nota do aluno:"))
   let sexo = prompt("Digite  o sexo do aluno :  (f/m)")

   if(sexo == "m" ) { 
        if(nota > maiorNotaHomens) {
            maiorNotaHomens = nota
            homens ++
        }

    }

   if( sexo == "f" && nota > 7 ) { 
    quantidadeMulheresAcima7 ++
   }

   mediaGeral += nota

   contador ++
}

mediaGeral = mediaGeral / 10

console.log(`A média dos alunos é : ${mediaGeral}`)
console.log(`A quantidade de homens que enviaram notas é : ${homens}`)
console.log(`A quantidade de mulheres que tiveram a nota acima de 7 é: ${quantidadeMulheresAcima7}`)
console.log(`A maior nota entre os homens é : ${maiorNotaHomens}`)