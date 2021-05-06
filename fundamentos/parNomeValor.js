// par nome/valor
const saudacao = 'Dale' /// contexto léxico 1

function exec() {
    const saudacao = 'Coe' // contexto lexico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Dindindin',
        numero: 160
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)