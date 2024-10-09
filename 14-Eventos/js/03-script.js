const busqueda = document.querySelector('.busqueda');
busqueda.addEventListener('input', (e) => {
    if(e.target.value === ''){
    console.log('Fallo la validacion');
    }
})

// keydown - Escribiendo
// keyup - se ejecuta el evento cuando se presiona y se suelta la tecla
// blur - entra y sales al input y se ejecuta el evento - util para validaciones
// copy - copiar texto del formulario
// paste - pegas texto en el formulario
// cut - cuando cortas el texto
// input - se ejecuta cuando estas escribiendo - abarca todas las funciones anteriores