let confirmar = "n"
while(confirmar != "s") { 

    let nome = prompt("Digite seu nome: ")
    let idade = parseInt(prompt("Digite sua idade"))
    let salarioAtual = parseFloat(prompt("Digite seu salario:"))

    console.log(`Olá ${nome}, sua idade é ${idade}. Seu salário atual é ${salarioAtual}`)
    confirmar = prompt("As informações estão corretas? (s/n)")

    let aumento = 0.015

for(let i = 1; i <= 10; i++) { 
    salarioAtual = (salarioAtual * aumento)
    aumento *= 2
    console.log((2024 + i) + " = R$ " + salarioAtual)
}
}

