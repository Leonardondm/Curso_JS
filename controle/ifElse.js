const imprimirResultado = function (nota) {
    if (nota >= 7) {
        console.log('Aprovado')
    } else {
        console.log('Reporvado')
    }
}

imprimirResultado(8)
imprimirResultado(5)
imprimirResultado('Dale') // fracamente tipada