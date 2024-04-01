let modelos = [];
let anos = [];
let valores = [];
let continuar = true;

while(continuar) { 
  let modelo = prompt("Digite o modelo do veículo:");
  let ano = prompt("Digite o ano do veículo");
  let valor = parseFloat(prompt("Digite o valor do veículo:"));

  modelos.push(modelo);
  anos.push(ano);
  valores.push(valor);

  let resposta = prompt("Deseja inserir novos dados? (s/n)")
  if(resposta === "n") { 
    continuar = false;
  }

}
 //Listagem de carros inseridos
console.log(`Lista de veículos inseridos:`);
  
for(let i = 0 ; i < modelos.length; i++) { 
    console.log(`Veiculo: ${modelos[i]} - Ano:  ${anos[i]} - Valor ${valores[i]}`);
}

// listagem ordenada por valores: 

for(let i = 0; i < valores.length - i - 1; i++) { 
    for(let j = 0; i < valores.length - 1; i++) { 
        if(valores[j] > valores[j + 1]) { 

            let modeloMaiorValor = modelos[j];
            modelos[j] = modelos[j + 1];
            modelos[j + 1] = modeloMaiorValor;

            let anosMaiorValor = anos[j];
            anos[j] = anos[j + 1];
            anos[j + 1] = anosMaiorValor;

            let maiorValor = valores[j];
            maiorValor[j] = maiorValor[j + 1 ];
            maiorValor[j + 1] = maiorValor;
        }
    }
}

console.log("Listagem de carros ordenados pelo preço:")
for(let i = 0 ; i < modelos.length ; i++) { 
    console.log(`Veiculo: ${modelos[i]} - Ano:  ${anos[i]} - Valor ${valores[i]}`)
}


