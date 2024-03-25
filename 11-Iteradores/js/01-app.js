//For loop
// for (let i = 1; i <= 10; i++) {
// console.log(`El numero es: ${i}`);
// }

// Todos los numeros que dejan el resto en 0 son par
// for (let i = 1; i <= 20; i++){
//     if(i % 2 === 0){
//         console.log(`Numero PAR: ${i}`);
//     }else {
//         console.log(`Numero IMPAR: ${i}`);
//     }
// }

const carrito = [
    { nombre: 'Monitor 27"', precio: 1000 },
    { nombre: 'iPhone 15 Pro Max', precio: 2000 },
    { nombre: 'Gabinete corsair"', precio: 3000 },
    { nombre: 'Mouse logitech', precio: 4000 },
    { nombre: 'Spotify Premium 4 Months', precio: 5000 },
    { nombre: 'Funko Pop: Spider-Man', precio: 6000 },
];

for (let i = 0; i < carrito.length; i++){
    console.log(carrito[i]);
}