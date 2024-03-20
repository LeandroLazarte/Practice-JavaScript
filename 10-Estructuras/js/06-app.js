// El operador And && va a comprobar que las dos condiciones se cumplan
const usuario = false;
const puedePagar = false;

if(usuario && puedePagar){
    console.log(`Estas registrado y puedes comprar.`);
} else if(!usuario && !puedePagar){
    console.log(`No estas registrado, por lo tanto no puedes comprar.`);
} else if(!usuario){
    console.log(`Registrate e inicia sesion.`);
}else if(!puedePagar){
    console.log(`Fondos insuficientes.`);
}