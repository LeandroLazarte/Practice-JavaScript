const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
    { nombre: "Monitor Samsung 27", precio: 2000 },
    { nombre: "iPhone 15 Pro Max", precio: 4000 },
    { nombre: "Tv Samsung", precio: 6000 },
    { nombre: "Auriculares gamer", precio: 8000 },
    { nombre: "Cafetera Expresso", precio: 6500 },
    { nombre: "Apple Macbook Air", precio: 3000 }
];

// mostrar la posicion en arreglo de meses en modo manual
meses.findIndex((mes, i) => {
    if (mes === "Febrero") {
        console.log(`El mes ${mes} se encuentra en la posicion ${i}`);
    }
});

// mostrar la posicion con FindIndex
const indice = meses.findIndex((mes) => mes === "Febrero");
console.log(indice);

// FindIndex con arreglo de objetos
const indiceDos = carrito.findIndex((producto) => producto.nombre === "Cafetera Expresso");
console.log(indiceDos);