// adjuntando la etiqueta de enlaces <a></a>
const nuevoEnlace = document.createElement('a');
nuevoEnlace.textContent = 'Nuevo Enlace'; // agregando contenido al enlace

//adjuntando el href al nuevo enlace
nuevoEnlace.href = '/nuevo-enlace';
console.log(nuevoEnlace);

nuevoEnlace.target= '_blank';
nuevoEnlace.setAttribute('data-enlace', 'nuevo-enlace');
nuevoEnlace.classList.add('alguna-clase');
nuevoEnlace.onclick = miFuncion;



const navegacion = document.querySelector('.navegacion');
console.log(navegacion.children);
navegacion.insertBefore(nuevoEnlace,navegacion.children[1])

function miFuncion() {
    alert('Diste click');
}

// Crear una Card de forma dinamica

const parrafoUno = document.createElement('p');
parrafoUno.textContent = 'Concierto';
parrafoUno.classList.add('categoria', 'concierto');

const parrafoDos = document.createElement('p');
parrafoDos.textContent = 'Techno Live Set';
parrafoDos.classList.add('titulo');

const parrafoTres = document.createElement('p');
parrafoTres.textContent = '$20.000 por persona';
parrafoTres.classList.add('precio');

// console.log(parrafoUno);
// console.log(parrafoDos);
// console.log(parrafoTres);

// Crear div con clase de info
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafoUno);
info.appendChild(parrafoDos);
info.appendChild(parrafoTres);

// Crear la imagen de la card
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';

const card = document.createElement('div');
card.classList.add('card');

// asignar la imagen a la card
card.appendChild(imagen);

// asignar la info a la card
card.appendChild(info);

const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card);