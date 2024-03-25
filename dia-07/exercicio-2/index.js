let saldo = 900.00
let retirada = 0;
let maiorValorInserido = 0 
let somaValoresInseridos = 0
let transacoes = 0
let continuar = true
do { 
    let nome = prompt("Digite seu nome: ")
    let cpf = Number(prompt("Digite seu CPF:"))
    let operacao = prompt("Deseja fazer um saque ou deposito? (s/d)") 
    let valor = Number(prompt("Digite o valor da transação que deseja efetuar: "))
   
    if( valor < 0 ) { 
        console.log("Digite um valor válido para seguir com a operação") 
    } else if ( operacao == "s" && valor > saldo) {
        console.log("Não é possível seguir com a operação, você não tem saldo suficiente") 
    } else if(operacao == "s" ) { 
        saldo -= valor
        somaValoresInseridos += valor
        transacoes ++

        if(valor > maiorValorInserido) {
            maiorValorInserido = valor  
        } 

        console.log(`Olá, ${nome}. Sua transação foi realizada com sucesso. `)
        console.log(`O saldo atual de sua conta é ${saldo}`)
        
        
    } else if ( operacao ==="d") { 
        saldo += valor
        transacoes ++
        maiorValorInserido = valor 
        somaValoresInseridos += valor 
    }

    let opcao = prompt("Deseja continuar?  ( Digite 1 para continuar, 2 para parar atransação"); 

    if ( opcao ==="1") { 
        continuar = true
    } else if ( opcao ==="2") { 
        
        continuar = false

    } else { 
        console.log("Opção é invalida. Encerrado por questões de segurança. ")
        continuar = false
    }


} while (continuar)


console.log(`O saldo final de sua conta é ${saldo}`)
console.log(`O maior valor inserido foi: ${maiorValorInserido}`)
console.log(`A média de valores inseridos é: R$ ${somaValoresInseridos / transacoes}`)
console.log(`Obrigada por utilizar nossos serviços. Até mais `)