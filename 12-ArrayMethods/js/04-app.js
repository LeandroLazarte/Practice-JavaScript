const carrito = [
    { nombre: 'Monitor Samsung 27" 240Hz', precio: 500 },
    { nombre: 'Iphone 15 Pro 128Gb', precio: 300 },
    { nombre: 'Teclado Logitech 915 TKL', precio: 400 },
    { nombre: 'Gabinete Corsair Carbide 400cc', precio: 200 },
    { nombre: 'Termo Contigo Star Wars', precio: 200 },
    { nombre: 'Vaporesso Gen 160', precio: 300 },
    { nombre: 'Parlante JBL GO', precio: 400 }
];

let resultado;

resultado = carrito.filter(producto => producto.precio > 400);
resultado = carrito.filter(producto => producto.precio < 400);
resultado = carrito.filter(producto => producto.nombre !== 'Monitor Samsung 27" 240Hz');
resultado = carrito.filter(producto => producto.nombre === 'Monitor Samsung 27" 240Hz');

console.log(resultado);
