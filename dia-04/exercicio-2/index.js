let nome = prompt("Digite seu nome:"); 
let idade = prompt("Digite sua idade: "); 
let temCartaDeMotorista = prompt("Tem carta de motorista?  Digite sim ou nao" ); 
let temCarro = prompt("Você tem carro?  Digite sim ou nao"); 


if (idade < 18 || temCartaDeMotorista === "nao") { 
    console.log(`${nome}, você não pode dirigir`);
} else if (idade <= 18 || temCartaDeMotorista === "sim" && temCarro ==="nao" ) { 
    console.log(`${nome}, você pode dirigir, mas não tem carro.`);
} else { 
    console.log(`${nome},você será o motorista! `);
}