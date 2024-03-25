// El operador Or || va a comprobar que una u otra condicion se cumpla.
const efectivo = 300;
const credito = 300;
const dineroDisponible = efectivo + credito;
const totalPagar = 600;

if (efectivo > totalPagar || credito > totalPagar || dineroDisponible >= totalPagar) {
    console.log(`Si podemos pagar`);
}else {
    console.log(`No podemos pagar, fondos insuficientes`);
}