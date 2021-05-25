function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}
console.log(criarProduto('TV', 2500))
console.log(criarProduto('Sofa', 850))