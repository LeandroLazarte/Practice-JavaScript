const carrito = [
    { nombre: "Monitor Samsung 27", precio: 2000 },
    { nombre: "iPhone 15 Pro Max", precio: 4000 },
    { nombre: "Tv Samsung", precio: 6000 },
    { nombre: "Auriculares gamer", precio: 8000 },
    { nombre: "Cafetera Expresso", precio: 6500 },
    { nombre: "Apple Macbook Air", precio: 3000 }
];

// con un ForEach
let total = 0;
carrito.forEach((producto) => total += producto.precio);
console.log(`El total de su carrito es de $${total}`);

// Metodo reduce para sumar la totalidad de los precios del carrito
const resultado = carrito.reduce((total, producto) => total + producto.precio, 0);
console.log(`El total de su carrito es : $${resultado}`);