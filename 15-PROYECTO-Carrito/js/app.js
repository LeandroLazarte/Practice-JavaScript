// Variables
const carrito = document.querySelector('#carrito');
const listaCarrito = document.querySelector('#lista-carrito tbody');
const btnVaciarCarrito = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarritos = [];

// Event Listener
cargarEventListeners();
function cargarEventListeners() {
    // Borrar un curso del carrito
    carrito.addEventListener('click', btnBorrarCurso);
    // Cargar el curso cuando se aprieta el boton "Agregar al Carrito"
    // Desde el id "Lista de cursos"
    listaCursos.addEventListener('click', agregarCurso);
}

function agregarCurso(e) {
    e.preventDefault();

    if (e.target.classList.contains('agregar-carrito')) {
        // Accedemos al DIV que tiene todo el contenido del curso
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado)
    }
}

// Eliminar producto del carrito con el boton X
function btnBorrarCurso(e) {
    if (e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');
        // Elimina del arreglo de articulosCarrito por el data-id
        articulosCarritos = articulosCarritos.filter(curso =>  curso.id !== cursoId )
        
        mostrarHTML();
    }
}


// Funcion para agregar el curso al carrito
// Extrae los datos de la card
function leerDatosCurso(curso) {
    console.log(curso);

    // Crear objeto con los datos de cada curso (CARD)
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    // Revisamos si un elemento ya existe en el carrito
    const existe = articulosCarritos.some(curso => curso.id === infoCurso.id);
    if (existe) {
        // Actualizamos la cantidad de productos en el carrito
        const cursos = articulosCarritos.map(curso => {
            if (curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso;
            } else {
                return curso;
            }
        })
        articulosCarritos = [...cursos];
    } else {
        articulosCarritos = [...articulosCarritos, infoCurso]
    }

    // Agregar los elementos al carrito de compras

    console.log(articulosCarritos);
    mostrarHTML();
}

// Mostrar los productos que se agregaron al carrito en la tabla del HTML
function mostrarHTML() {
    // Limpiar el HTML
    limpiarHTML();

    //Recorre el carrito y genera el HTML
    articulosCarritos.forEach((curso) => {
        const row = document.createElement('tr');
        // Destructuring
        const { imagen, titulo, precio, cantidad, id } = curso;
        row.innerHTML = `
            <td> <img src="${imagen}" width="100"> </td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td> <a href="#" class="borrar-curso" data-id="${id}"> X </a> </td>
            `
        listaCarrito.appendChild(row);
    })
}

const limpiarHTML = (() => {
    while (listaCarrito.firstChild) {
        listaCarrito.removeChild(listaCarrito.firstChild);
    }
}) 