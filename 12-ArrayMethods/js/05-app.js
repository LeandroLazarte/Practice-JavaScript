const carrito = [
    { nombre: 'Monitor Samsung 27" 240Hz', precio: 500 },
    { nombre: 'Iphone 15 Pro', precio: 300 },
    { nombre: 'Teclado Logitech 915 TKL', precio: 400 },
    { nombre: 'Gabinete Corsair Carbide 400cc', precio: 200 },
    { nombre: 'Termo Contigo Star Wars', precio: 200 },
    { nombre: 'Vaporesso Gen 160', precio: 300 },
    { nombre: 'Parlante JBL GO', precio: 400 }
];

let resultado;

// .forEach
carrito.forEach((producto, index) => {
    if (producto.nombre === 'Iphone 15 Pro') {
        resultado = carrito[index]
    }
})
// console.log(resultado);

// .find
const resultaDos = carrito.find(producto => producto.precio === 400);
console.log(resultaDos);



