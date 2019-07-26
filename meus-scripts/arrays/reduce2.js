Array.prototype.reduce2 = function(callback){
    valor = this
    while(valor.length != 1){
       valor.splice(0, 2, callback(valor[0], valor[1]))
    }

    return valor[0]
}

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
    { nome: 'Ana', nota: 8.7, bolsista: false }
]

// Dessafio 1: Todos os Alunos são bolsistas?

const todosBolsista = (acumulador, atual) => (acumulador == true) && (atual == true)
const algumBolsista = (acumulador, atual) => (acumulador == true) || (atual == true)
const respTodos = alunos.map(a => a.bolsista).reduce2(todosBolsista)
const respAlgum = alunos.map(a => a.bolsista).reduce2(algumBolsista)

console.log(respTodos)
console.log(respAlgum)