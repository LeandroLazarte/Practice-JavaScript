// Do While

let i = 1; // Inicio

do {
    if (i % 15 === 0) {
        console.log(`Numero ${i} Fizz Buzz`);
    } else if (i % 3 === 0) {
        console.log(`Numero ${i} Fizz`);
    } else if (i % 5 === 0) {
        console.log(`Numero ${i} Buzz`);
    }
    i++;
} while (i <= 100);