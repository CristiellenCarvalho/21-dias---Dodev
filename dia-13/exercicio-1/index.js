class Computador { 
    Tipo
    Processador
    Video
    Armazenamento
    MemoriaRam
    Ssd

        constructor(tipo, processador, video, armazenamento, memoriaRam, ssd) { 
            this.Tipo = tipo
            this.Processador = processador
            this.Video = video
            this.Armazenamento = armazenamento
            this.MemoriaRam = memoriaRam
            this.Ssd = ssd
        }
    
        apresentar(tipo,processador,video,armazenamento,memoriaRam,ssd) {
             console.log(`O computador é do tipo ${this.Tipo}`)
             console.log(`O processador é: ${this.Processador}`)
             console.log(`O video é ${this.Video}`)
             console.log(`O armazenamento é ${this.Armazenamento}`)
             console.log(`A memória é: ${this.MemoriaRam}`)
             console.log(`O ssd é: ${this.Ssd}`)

        }
}
const meuComputador = new Computador("notebook", "ryzen5", "integrado", 500, 8 , true)

meuComputador.apresentar()