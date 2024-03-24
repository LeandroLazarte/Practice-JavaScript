const carrito = [
    { nombre: "Monitor Samsung 27", precio: 100 },
    { nombre: "iPhone 15 Pro Max", precio: 200 },
    { nombre: "Tv Samsung", precio: 300 },
    { nombre: "Auriculares gamer", precio: 400 },
    { nombre: "Cafetera Expresso", precio: 500 },
    { nombre: "Apple Macbook Air", precio: 600 }
];

let resultado;
// Filtrado por precio mayor o menor
resultado = carrito.filter((producto) => producto.precio > 300);
resultado = carrito.filter((producto) => producto.precio < 500);
// filtrado por nombre
resultado = carrito.filter((producto) => producto.nombre !== "Tv Samsung");
resultado = carrito.filter((producto) => producto.nombre === "iPhone 15 Pro Max");
console.log(resultado);