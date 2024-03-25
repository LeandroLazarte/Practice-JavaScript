const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

const carrito = [
    { nombre: 'Monitor 27"', precio: 1000 },
    { nombre: 'iPhone 15 Pro Max', precio: 2000 },
    { nombre: 'Gabinete corsair', precio: 3000 },
    { nombre: 'Mouse logitech', precio: 4000 },
    { nombre: 'Spotify Premium 4 Months', precio: 5000 },
    { nombre: 'Funko Pop: Spider-Man', precio: 6000 },
]

// Comprobar si un valor existe en un arreglo
const resultado = meses.includes('Enero');
// console.log(resultado);

// En un arreglo de objetos se utiliza .some
const existe = carrito.some (producto => producto.nombre === 'Gabinete corsair')
console.log(existe);