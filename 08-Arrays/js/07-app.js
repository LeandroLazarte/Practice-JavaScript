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

// // Eliminar ultimo elemento del carrito
// carrito.pop();
// console.table(carrito);

// // Eliminar primer elemento del carrito
// carrito.shift(producto);
// console.table(carrito);

carrito.splice(1, 1);
console.table(carrito);