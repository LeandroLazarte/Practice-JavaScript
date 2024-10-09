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


meses.forEach((mes, i) => {
    if (mes === 'Abril') {
        console.log(`El mes Abril se encuentra en el indice ${i}`);
    }
});

// Encontrar el indice de Abril con FindIndex
const indice = meses.findIndex(mes => mes === 'Abril');
console.log(indice);

// Encontrar un producto con FindIndex
const indiceDos = carrito.findIndex(producto => producto.nombre === 'Vaporesso Gen 160');
console.log(indiceDos);


