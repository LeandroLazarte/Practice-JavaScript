const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1Kg',
    medida: '1Mts'
}

// Unir dos objetos
const resultado = Object.assign(producto, medidas);

console.log(resultado);

// Spreed operator o Rest operator
const resultado2 = {...producto, ...medidas};
console.log(resultado2);

