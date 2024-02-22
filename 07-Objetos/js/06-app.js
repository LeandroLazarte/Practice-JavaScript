// Destructuring un objeto
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

const { nombre, informacion, informacion: { medidas }, informacion: { fabricacion, fabricacion: { pais } } } = producto;

console.log(nombre);
console.log(informacion);
console.log(fabricacion);
console.log(pais);

