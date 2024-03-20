// Operador mayor que y menor que
const dinero = 300;
const totalAPagar = 500;
const cheque = false;
const tarjeta = false;

if (dinero >= totalAPagar) {
    console.log('Si podemos pagar');
} else if (cheque) {
    console.log('Tengo un cheque para pagar');
} else if (tarjeta) {
    console.log('Tengo para pagar con tarjeta');
} else {
    console.log('Fondos insuficientes');
}