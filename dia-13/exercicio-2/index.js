class Carro{ 
   Nome
   Potencia
   VelocidadeMaxima
   Aceleracao

        constructor(nome,potencia,velocidadeMaxima,aceleracao) { 
            this.Nome = nome
            this.Potencia = potencia
            this.VelocidadeMaxima = velocidadeMaxima
            this.Aceleracao = aceleracao

        }

        calculaVelocidade(distancia) { 
            let resultado = distancia/(this.VelocidadeMaxima / this.Aceleracao)
                return console.log(`Para percorrer a distancia ${distancia}, o carro leva ${resultado} em segundos.`)
        }
}
const meuCarro = new Carro("Ferrari", "100",250,8)  
    
meuCarro.calculaVelocidade(200)    
    