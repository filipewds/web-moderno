Array.prototype.map2 = function(callback){
    result = []
    for(let i = 0; i < this.length; i++){
        result.push(callback(this[i]))
    }

    return result
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Retornar um array com apenas os preços

const getPreco = obj => obj.preco
const resultado = carrinho.map2(JSON.parse).map2(getPreco)
console.log(resultado)