// Obtengo 100 numeros
// Multiplos de 3 como 3 6 9 12 ... Fizz
// Multiplos de 5 como 5 10 15 25 ... Buzz
// Multiplos de ambos numeros ... FIZZBUZZ

for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log(`Numero ${i} Fizz Buzz!!!`);
    } else if (i % 3 === 0) {
        console.log(`Numero ${i} Fizz`);
    } else if (i % 5 === 0) {
        console.log(`Numero ${i} Buzz`);
    }
}