let nomes = []
let senhas = []
let continuar = true
let contador = 0

while(continuar) { 
    let opcao = prompt("O que deseja fazer? 1 - cadastro / 2 - Login / 3- Excluir / 4 - encerrar")

    switch (opcao) { 
        case "1" :
            nomes[contador] = prompt("Qual o nome?")
            senhas[contador] = prompt("Qual a senha?")
            contador++
            break;

        case "2": 
            let nome = prompt("Digite o usuario:")
            let senha= prompt("Digite a senha:")
            let loginValido = false

            for(let i = 0; i < nomes.length ; i++ ) { 
                if(nome == nomes[i] && senha == senhas[i]) { 
                    loginValido = true;
                }
            }

            if(loginValido) { 
                alert("Login realizado com sucesso!")
            } else { 
                alert("Login ou senha incorretos!")
            }
            break;

        case "3": 

            let nomeExcluir = prompt("Qual o nome deseja excluir?")
            let nomeAux = []
            let senhaAux = []
            let contadorAux = 0

            for(let i = 0; i < contador; i++) { 
               if(nomeExcluir == nomes[i]) { 
                    alert("Cadastro excluido com sucesso!")
               } else { 
                nomesAux[contadorAux] = nomes[i]
                senhaAux[contadorAux] = senha[i]
                contadorAux++
               } 
            }

            nomes = nomesAux
            senhas = senhaAux
            contador--
            break;

        case "4": 
            continuar = false 
            break;

        default: 
        console.log("Digite uma opção válida!")
        break;
    }
}