// Objeto literal
const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

// const nombre = producto.nombre;
// console.log(nombre);

// Destructuring (Destructurar un objeto)
const { nombre, precio, disponible } = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);

// console.log(producto);