const carrito = [
    { nombre: 'Monitor Samsung 27" 240Hz', precio: 500 },
    { nombre: 'Iphone 15 Pro 128Gb', precio: 1000 },
    { nombre: 'Teclado Logitech 915 TKL', precio: 1500 },
    { nombre: 'Gabinete Corsair Carbide 400cc', precio: 2000 },
    { nombre: 'Termo Contigo Star Wars', precio: 2500 },
    { nombre: 'Vaporesso Gen 160', precio: 3000 },
    { nombre: 'Parlante JBL GO', precio: 3500 }
];

// Suma total de carrito ForEach
let total = 0;
carrito.forEach(producto => total += producto.precio);
console.log(`Total de tu carrito es: $${total}`);

// Suma total de carrito .reduce
let resultado = carrito.reduce((total, producto) => total + producto.precio, 0);
console.log(`El valor final de tu carrito es: $${resultado}`);

