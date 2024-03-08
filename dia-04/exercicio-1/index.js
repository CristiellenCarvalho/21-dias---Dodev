let fome = prompt("Olá, você está com fome? Responda somente {sim/nao}");
let dinheiro = prompt("VOc~E tem dinheiro?  Responda somente {sim/nao} "); 
let restaurante = prompt("O restaurante está aberto?  Responda somente{sim/nao}"); 

if ( fome === "nao" || dinheiro === "nao") { 
    console.log("Hoje a janta será em casa");
} else if (dinheiro === "sim" && restaurante === "sim") { 
    console.log("Hoje o jantar será no seu restaurante preferido");
} else { 
    console.log("Peça um delivery");
}