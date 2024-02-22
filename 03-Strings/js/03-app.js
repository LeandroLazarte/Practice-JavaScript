const producto = 'Monitor 20 pulgadas ';
const precio = '$30 USD ';

// Concatenar Strings
console.log(producto.concat(precio));
console.log(producto + precio);

console.log(producto + 'con un precio de ' + precio);
console.log('El producto ' + producto + 'tiene un precio de ' + precio);

// Templates Strings
console.log(`El producto ${producto} tiene un precio de $ ${precio} USD`);