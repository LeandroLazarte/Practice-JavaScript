const carrito = [
    { nombre: 'Monitor 27"', precio: 1000 },
    { nombre: 'iPhone 15 Pro Max', precio: 2000 },
    { nombre: 'Gabinete corsair"', precio: 3000 },
    { nombre: 'Mouse logitech', precio: 4000 },
    { nombre: 'Spotify Premium 4 Months', precio: 5000 },
    { nombre: 'Funko Pop: Spider-Man', precio: 6000 },
]


// carrito.forEach(producto => {
//     console.log(`Nombre: ${producto.nombre} | Precio: $${producto.precio}`);
// });

// .map
const nuevoArreglo =  carrito.map(producto => {
    return `Nombre: ${producto.nombre} | Precio: $${producto.precio} `
});

console.table(nuevoArreglo);




/* La diferencia entre Map y forEach es que Map itera sobre el arreglo "Carrito" y
crea un nuevo arreglo donde inserta los productos del mismo */ 