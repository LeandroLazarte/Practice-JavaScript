const carrito = [
    { nombre: 'Monitor 27"', precio: 1000 },
    { nombre: 'iPhone 15 Pro Max', precio: 2000 },
    { nombre: 'Gabinete corsair"', precio: 3000 },
    { nombre: 'Mouse logitech', precio: 4000 },
    { nombre: 'Spotify Premium 4 Months', precio: 5000 },
    { nombre: 'Funko Pop: Spider-Man', precio: 6000 },
]

// for (let i = 0; i < carrito.length; i++){
//         console.log(carrito[i]);
// }

// Metodo forEach
// carrito.forEach(function(producto){
//     console.log(`Nombre: ${producto.nombre} | Precio: ${producto.precio}`);
// })

// Arrow Function
carrito.forEach(producto => {
    console.log(`Nombre: ${producto.nombre} | Precio: ${producto.precio}`);
})