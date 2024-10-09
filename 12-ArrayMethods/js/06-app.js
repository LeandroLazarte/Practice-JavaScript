const carrito = [
    { nombre: 'Monitor Samsung 27" 240Hz', precio: 500 },
    { nombre: 'Iphone 15 Pro', precio: 300 },
    { nombre: 'Teclado Logitech 915 TKL', precio: 400 },
    { nombre: 'Gabinete Corsair Carbide 400cc', precio: 200 },
    { nombre: 'Termo Contigo Star Wars', precio: 200 },
    { nombre: 'Vaporesso Gen 160', precio: 300 },
    { nombre: 'Parlante JBL GO', precio: 400 }
];

// .every se tienen que cumplir todas las condiciones para que retorne true
const resultado = carrito.every(producto => producto.precio < 600);
console.log(resultado);

// .some basta con que se cumpla una sola condicon para que retorne true
const resultaDos = carrito.some(producto => producto.precio < 400);
console.log(resultaDos);
