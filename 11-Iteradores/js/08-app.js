// For in itera sobre objetos
const auto = {
    Modelo: 'Volkswagen',
    Version: 'Gol Trend',
    Año: 2014,
    Motor: 1.6
}

for (let descripcion in auto) {
    console.log(`${descripcion} : ${auto[descripcion]}`);
}

// for (let [key, value] of Object.entries(auto)) {
//     console.log(`${key} : ${value}`);
// }
