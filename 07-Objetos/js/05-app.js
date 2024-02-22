// Objeto literal
const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            peso: '1Kg',
            alto: '20cm',
            largo: '40cm'
        },
        fabricacion: {
            pais: 'China',
            capital: 'Beijing'
        }

    }
}

console.log(producto);

console.log(producto.informacion);
console.log(producto.informacion.medidas);
console.log(producto.informacion.fabricacion);
console.log(producto.informacion.fabricacion.pais);
