// Acceder a los valores de un arreglo
const numeros = [10, 20, 30, 40, 50, [1, 2, 3]];

console.table(numeros);

console.log(numeros[0]);
console.log(numeros[3]);
console.log(numeros[1]);
console.log(numeros[4]);
console.log(numeros[6]); // Posicion incorrecta

// Arreglo dentro de otro arreglo
console.log(numeros[5][0]);