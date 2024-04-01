let alunos =[]
let notas = [] 
let continuar = true;
let contador = 0

while(continuar) { 
   let nome = prompt(`Digite o nome do ${contador + 1 } Aluno: `)
   let nota = parseInt(prompt("Digite a nota do aluno:"))

   contador++

   alunos.push(nome)
   notas.push(nota)

   let resposta = prompt("Deseja inserir outra nota?  (s/n)") 
   if(resposta =="n") { 
    continuar = false;
   }
}

console.log("Nota dos alunos: ")
for(let i = 0; i < alunos.length; i++) { 
    console.log(`${alunos[i]} - ${notas[i]}`)
}

let somaNotasAlunos = 0;

for(let i = 0; i < notas.length; i++) {
    somaNotasAlunos += notas[i]
}

let media = somaNotasAlunos / notas.length 

console.log(`A soma de todas as notas foi: ${somaNotasAlunos}`)
console.log(`A média da turma foi: ${media}`)