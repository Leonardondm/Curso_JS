/*
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Joca')
p1.falar()
*/

/////////////////////////////////////////////////////////

function Pessoa(nome) {
    this.nome = nome

    this.getNome = function () {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Leonardo')
p1.getNome()