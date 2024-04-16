let nomes = []
let senhas = []

//solicitando opção
function opcaoEscolhida () { 
    let opcao = prompt("Escolha uma opção: \n1. Cadastrar \n2.Realizar login \n3.Excluir \n4.Encerrar")
        return opcao
}

//cadastrar usuario
function cadastroUsuario() { 
    nomes.push(prompt("Digite seu nome")) 
    senhas.push(prompt("Digite sua senha"))
}

//realizar login
function fazerLogin(nome,senha) { 
    let indice = nomes.indexOf(nome)
        if(indice !== -1 && senhas[indice] == senha) { 
            return true;
        } else { 
            return false;
        }
}

//excluir cadastro
function excluirCadastro(nome) { 
    let indice = nomes.indexOf(nome) 
    if(indice !== -1) { 
        nomes.splice(indice, 1)
        senhas.splice(indice, 1)
        console.log("Cadastro excluído com sucesso")
    } else { 
        console.log("Usuário não encontrado")
    }
}


// funcionamento do código

let continuar = true;

while (continuar) {
    let opcao = opcaoEscolhida(); 

    switch(opcao) {
        
        case "1": 
        cadastroUsuario()
        break;

        case "2": 
        let nomeLogin = prompt("Digite seu nome")
        let senhaLogin = prompt("Digite sua senha")
        let login = fazerLogin(nomeLogin,senhaLogin);
        if(login) { 
            console.log("Login realizado com sucesso")
            
        } else { 
            console.log("Nome ou senha incorretos!")
        }
        break; 

        case "3":
        let nomeExcluir = prompt("Digite seu nome:")
        excluirCadastro(nomeExcluir)
        break;

        case "4": 
        continuar = false;
        break;

        default: 
        console.log("Opção Inválida. Tente novamente."); 
        break;
    }
}