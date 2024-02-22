"use strict"

const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

Object.seal(producto);
producto.disponible = false;
// producto.imagen = 'img.jpg'

console.log(producto);

// isSealed(), te permite verificar si un objeto esta sellado.
console.log(Object.isSealed(producto));

// Metodo Freeze no te permite modificar o agregar elementos al objeto
// En cambio, el metodo Seal tampoco te permite agregar o eliminar elementos al objeto pero si te permite modificar los elementos ya existentes.
