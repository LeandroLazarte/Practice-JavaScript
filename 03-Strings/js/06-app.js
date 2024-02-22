const producto = 'Monitor 20 pulgadas';

// repeat te va a permitir repetir una cadena de texto
const texto = ' en Promocion'.repeat(3);
console.log(texto);
console.log(`${producto} ${texto}`);

// split, divide un string

const actividad = 'Estoy aprendiendo Javascript Moderno';
console.log(actividad.split(" "));

const hobbies = 'Leer, jugar, correr, padel, aprender programacion';
console.log(hobbies.split(','));

const tweet = 'Aprendiendo Javascript Moderno, #JSmodernoConJuan';
console.log(tweet.split('#'));
