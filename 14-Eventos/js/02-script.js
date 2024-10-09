const nav = document.querySelector('.navegacion');

// Registrar un evento
nav.addEventListener('mouseout', () => {
    console.log('Saliendo navegacion del mouse');
    nav.style.backgroundColor = 'transparent';
})
nav.addEventListener('mouseenter', () => {
    console.log('Entrando navegacion del mouse');
    nav.style.backgroundColor = 'white';
})

// mouseDown - similar al click
// click
// dblclick
// mouseup - cuando sueltas el mouse