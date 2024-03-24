const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
    { nombre: "Monitor Samsung 27", precio: 2000 },
    { nombre: "iPhone 15 Pro Max", precio: 4000 },
    { nombre: "Tv Samsung", precio: 6000 },
    { nombre: "Auriculares gamer", precio: 8000 },
    { nombre: "Cafetera Expresso", precio: 6500 },
    { nombre: "Apple Macbook Air", precio: 3000 }
];

// Spreed Operator
const mesesDos = [...meses, "Agosto"];
console.log(mesesDos);

// Spreed Operator toma el arreglo original
// y crea uno nuevo a partir de los elementos que se agreguen.
const producto = { nombre: "Disco SSD", precio: 5000 };
const carritoDos = [...carrito, producto];
console.log(carritoDos);