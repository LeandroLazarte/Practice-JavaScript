const carrito = [
    { nombre: "Monitor", precio: 100 },
    { nombre: "iPhone", precio: 200 },
    { nombre: "Televisor", precio: 300 },
    { nombre: "Auriculares", precio: 400 },
    { nombre: "Cafetera", precio: 500 },
    { nombre: "Notebook", precio: 600 }
];

// forEach
let resultado = "";
carrito.forEach((producto, index) => {
    if (producto.nombre === "Cafetera") {
        resultado = carrito[index];
    }
})
console.log(resultado);

// filtrar elementos de un arreglo con .find
const resultadoDos = carrito.find(producto => producto.nombre === "iPhone");
console.log(resultadoDos);

const resultadoTres = carrito.find(producto => producto.nombre === "Televisor");
console.log(resultadoTres);