const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Retornar um array com apenas os preços

const getPreco = obj => obj.preco
const resultado = carrinho.map(JSON.parse).map(getPreco)
console.log(resultado)