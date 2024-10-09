const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

const carrito = [
    { nombre: 'Monitor Samsung 27" 240Hz', precio: 500 },
    { nombre: 'Iphone 15 Pro 128Gb', precio: 1000 },
    { nombre: 'Teclado Logitech 915 TKL', precio: 1500 },
    { nombre: 'Gabinete Corsair Carbide 400cc', precio: 2000 },
    { nombre: 'Termo Contigo Star Wars', precio: 2500 },
    { nombre: 'Vaporesso Gen 160', precio: 3000 },
    { nombre: 'Parlante JBL GO', precio: 3500 }
];

// Comprobar si un valor existe en un arreglo
meses.forEach((mes) => {
    if (mes === 'Enero') {
        console.log('Enero si existe');
    }
});

const resultado = meses.includes('Enero');
console.log(resultado);

// Comprobar si un valor existe en un arreglo de objetos

const existe = carrito.some((producto) => {
    return producto.nombre === 'Parlante JBL GO';
})
console.log(existe);

// Comprobar con .some si un valor existe en un arreglo de indice
const existeDos = meses.some((mes) => {
    return mes === 'Marzo';
})

console.log(existeDos);

