iniciandoApp();

function iniciandoApp() {
    console.log('Inicializando App');
    segundaFuncion();
}

function segundaFuncion() {
    console.log('La aplicacion sigue en espera');
    usuarioAutenticado('Leandro Lazarte');
}

function usuarioAutenticado(usuario) {
    console.log('Autenticando usuario... Espere...');
    console.log(`El usuario ${usuario} se autentico exitosamente`);
}