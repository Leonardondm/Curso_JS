let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return implicito
console.log(dobro(Math.PI))

let ola = function () {
    return 'ola'
}

ola = () => 'ola'  // funcao sem parametros
ola = _ => 'ola'  // um parametro
console.log(ola())