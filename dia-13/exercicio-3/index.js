class Corrida {
    constructor(nome, tipo, distancia) {
        this.Nome = nome;
        this.Tipo = tipo;
        this.Distancia = distancia;
        this.Participantes = [];
        this.Vencedor = "";
    }

    definirVencedor() {
        let menorTempo = this.Participantes[0].calcularTempoMedio(this.Distancia);
        let vencedor = this.Participantes[0];

        for (let index = 1; index < this.Participantes.length; index++) {
            let tempo = this.Participantes[index].calcularTempoMedio(this.Distancia);

            if (tempo < menorTempo) {
                menorTempo = tempo;
                vencedor = this.Participantes[index];
            }
        }

        this.Vencedor = vencedor;
    }

    exibirVencedor() {
        alert("O vencedor é: " + this.Vencedor.Nome);
    }
}

class Carro {
    constructor(modelo, velocidadeMaxima, aceleracao, marchas) {
        this.Modelo = modelo;
        this.VelocidadeMaxima = velocidadeMaxima;
        this.Aceleracao = aceleracao;
        this.Marchas = marchas;
    }

    calcularTempoMedio(distancia) {
        // Suponha que você tenha uma lógica para calcular o tempo médio com base na velocidade máxima e na distância
        // Por exemplo:
        return distancia / this.VelocidadeMaxima;
    }
}

let corrida = new Corrida("Fusca", "Formula 1", 60000);

corrida.Participantes[0] = new Carro("Palio", 120, 160, 5);
corrida.Participantes[1] = new Carro("Tiggo", 210, 200, 9);
corrida.Participantes[2] = new Carro("Fit", 300, 220, 10);

corrida.definirVencedor();
corrida.exibirVencedor();