// for (let i = 1; i <= 10; i++){
//     if(i === 5){
//         console.log(`Este es el ${i}`);
//         continue;
//     }
//     console.log(`Numero ${i}`);
// }

const carrito = [
    { nombre: 'Monitor 27"', precio: 1000 },
    { nombre: 'iPhone 15 Pro Max', precio: 2000, descuento:true },
    { nombre: 'Gabinete corsair"', precio: 3000 },
    { nombre: 'Mouse logitech', precio: 4000 },
    { nombre: 'Spotify Premium 4 Months', precio: 5000, descuento:true },
    { nombre: 'Funko Pop: Spider-Man', precio: 6000 },
]

for (let i = 0; i < carrito.length; i++){
    if (carrito[i].descuento){
        console.log(`Producto ${carrito[i].nombre} tiene descuento`);
        continue;
    }
    console.log(carrito[i]);
}