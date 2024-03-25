const carrito = [
    { nombre: "Monitor", precio: 100 },
    { nombre: "iPhone", precio: 200 },
    { nombre: "Televisor", precio: 300 },
    { nombre: "Auriculares", precio: 400 },
    { nombre: "Cafetera", precio: 500 },
    { nombre: "Notebook", precio: 600 }
];

// .every debe cumplir con todas las condiciones para que retorne un true (AND)
const resultado = carrito.every(producto => producto.precio <= 600);
console.log(resultado);
// .some se debe cumplir a menos una condicion para que retorne true (OR)
const resultadoDos = carrito.some(producto => producto.precio < 600);
console.log(resultadoDos);