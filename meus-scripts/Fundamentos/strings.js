const escola = 'eugenio'

console.log(escola.charAt(4))
console.log(escola.charCodeAt(4))
console.log(escola.indexOf('e'))
console.log(escola.substring(2))
console.log(escola.substring(1,4))
console.log('Escola: '.concat(escola).concat('!'))
console.log(escola.replace(/\w{3}/,'Eug'))

console.log('Ana, Maria, Pedro'.split(', '))