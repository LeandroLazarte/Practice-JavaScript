// Metodo Imperativo

const carrito = [];

// Definir un producto
const producto = {
    nombre: 'iPhone 14 Pro Max',
    precio: 10000,
    disponible: true
}

const productoDos = {
    nombre: 'Teclado Logitech',
    precio: 3020,
    disponible: true
}

// Push agrega el producto al final del carrito
carrito.push(producto);
carrito.push(productoDos);

const productoTres = {
    nombre: 'Gabinete Corsair',
    precio: 4000,
    disponible: true
}

carrito.unshift(productoTres);

console.table(carrito);