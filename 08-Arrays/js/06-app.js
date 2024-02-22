// Metodo Declarativo

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
const productoTres = {
    nombre: 'Gabinete Corsair',
    precio: 1024,
    disponible: true
}

let resultado;
// Spreed operator
resultado = [...carrito, producto];
resultado = [...resultado, productoDos];
resultado = [productoTres, ...resultado];

console.table(resultado);