 //declaração de variavéis
 continuar = "s"

while(continuar =="s") {
let nome = prompt("Digite seu nome:");  
let idade = prompt("Digite sua idade:");
let peso = parseInt(prompt("Digite seu peso:")); 
let altura = prompt("Digite sua altura: ");
let profissao = prompt("Digite sua profissão:"); 

console.log(`Olá ${nome}, você tem ${idade} anos, sua profissão atual é: ${profissao}, tem ${altura} de altura e pesa ${peso} kg.`); 

//Validação se é maior de idade
if(idade >= 18) {
    console.log("Está liberad(o/a) para tomar uma cervejinha gelada!")
} else { 
    console.log("Sem cerveja gelada pra você!")
}
// Validação de anos, meses e dias
let idadeEmMeses = idade * 12;
let idadeEmSemanas = idade * 52;
let idadeEmDias = idade * 365;

console.log(`Sua idade em meses é correspondente à ${idadeEmMeses} meses`);
console.log(`Sua idade em semanas é correspondente à ${idadeEmSemanas} semanas`);
console.log(`Sua idade em dias é correspondente à ${idadeEmDias} dias`);

//validação de IMC

let imc = peso / (altura * altura)

if( imc < 18.5) { 
    console.log("O seu IMC atual está categorizado no índice de: Magreza")
} else if ( imc > 18.5 && imc < 24.9) { 
    console.log("O seu IMC atual está categorizado no índice: Normal")
} else if (imc > 24.9 && imc < 30) { 
    console.log("O seu IMC atual está categorizado no índice de: Sobrepeso")
} else { 
    console.log("O seu IMC atual está categorizado no índice de: Obesidade")
}

// Ano de nascimento

let anoAtual = 2024 
let anoNascimentoUsuario = anoAtual - idade

console.log(`O seu ano de nascimento é: ${anoNascimentoUsuario}`)

// exibindo idade
let anosVividos = anoNascimentoUsuario
let idadeAtual = 0
anoNascimentoUsuario
for(let anosVividos = anoNascimentoUsuario; anosVividos <= anoAtual; anosVividos++) { 
    console.log(anosVividos + " - " + idadeAtual + " anos de idade")
    idadeAtual++
}


     continuar = prompt("Deseja inserir novos dados?  (s/n)" ) 
}