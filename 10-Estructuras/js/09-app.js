// Operador ternario if(?) // else(:)
const autenticado = true;
const puedePagar = false;

console.log(autenticado ? puedePagar ? `Si esta autenticado y puede pagar.` : `Si esta autenticado, fondos insuficientes.`
    : `No esta autenticado, no puede pagar.`);