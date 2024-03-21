let valor 
let quantidade 
let opcao = prompt("Olá, o que você deseja hoje? " + " \n 1 = abastecer com gasolina. \n2 = abastecer com alcool. \n3 = calibrar pneus")    

switch(opcao) {
    case "1": 
        valor = parseInt(prompt("Qual valor deseja abastecer?"))
        quantidade = valor / 5
        console.log(`Você abasteceu ${quantidade} Litros de gasolina`)
        break;

    case "2": 
        valor = parseInt(prompt("Qual valor deseja abastecer?"))
        quantidade = valor / 3
        console.log(`Você abasteceu ${quantidade} de Alcool`)
        break;

    default: 
        console.log("Pneus calibrados com sucesso!")
        break;
}