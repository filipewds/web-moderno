const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const filterGenero = b => b.genero == 'F'
const filterChinesas = b => b.pais == 'China'
const eMenor = (esq, dir) => esq.salario > dir.salario ? esq : dir

axios.get(url).then(response => {
    const funcionarios = response.data

    const mulherCh = funcionarios.filter(filterGenero).filter(filterChinesas)
    const menorSalario = mulherCh.reduce(eMenor)

    console.log(menorSalario)
})

