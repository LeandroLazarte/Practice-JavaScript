const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

const carrito = [
    { nombre: 'Monitor Samsung 27" 240Hz', precio: 500 },
    { nombre: 'Iphone 15 Pro 128Gb', precio: 1000 },
    { nombre: 'Teclado Logitech 915 TKL', precio: 1500 },
    { nombre: 'Gabinete Corsair Carbide 400cc', precio: 2000 },
    { nombre: 'Termo Contigo Star Wars', precio: 2500 },
    { nombre: 'Vaporesso Gen 160', precio: 3000 },
    { nombre: 'Parlante JBL GO', precio: 3500 }
];

// Spred Operator: Toma una copia del arreglo original y agrega un nuevo valor al nuevo arreglo (NO SE MODIFICA);
const mesesDos = [...meses, 'Agosto'];
console.log(mesesDos);

const producto = { nombre: 'SSD Kingstone 480Gb', precio: 400 };
const carritoDos = [...carrito, producto];
console.log(carritoDos);


