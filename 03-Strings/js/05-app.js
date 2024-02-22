const producto = 'Monitor 20 pulgadas';

// replace para reemplazar caracteres
console.log(producto);
console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor Curvo'));

// slice para cortar caracteres
console.log(producto.slice(0, 10));
console.log(producto.slice(8));
console.log(producto.slice(2, 1));

// substring reemplaza a slice
console.log(producto.substring(0, 10));
console.log(producto.substring(2, 1));

const usuario = 'Leandro';
console.log(usuario.substring(0, 1));
console.log(usuario.charAt(0));