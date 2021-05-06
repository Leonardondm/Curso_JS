const notas = [6.7, 7.4, 9.8, 7.7, 8.1]

for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for (let atributo in pessoa) { // ficar dentro do escopo com let
    console.log(`${atributo} = ${pessoa[atributo]}`) // crase
}

//console.log(atributo)