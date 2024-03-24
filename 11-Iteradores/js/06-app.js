// ForEach
// const tasks = ['Estudiar', 'Comer', 'Jugar Videojuegos', 'Padel'];

// tasks.forEach((pending, index) =>{
//     console.log(`${index} : ${pending}`);
// });

const carrito = [
    { nombre: 'Monitor 27" ', precio: 1000 },
    { nombre: 'iPhone 15 Pro Max', precio: 2000 },
    { nombre: 'Gabinete corsair', precio: 3000 },
    { nombre: 'Mouse logitech', precio: 4000 },
    { nombre: 'Spotify Premium 4 Months', precio: 5000 },
    { nombre: 'Funko Pop: Spider-Man', precio: 6000 },
]

// carrito.forEach((producto) => {
//     console.log(`Producto: ${producto.nombre} || Precio: $${producto.precio}`);
// })

const arregloMap = carrito.map((producto) => producto.nombre)

console.log(arregloMap);
