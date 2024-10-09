// const navegacion = document.querySelector('nav.navegacion');
// console.log(navegacion);

// console.log(navegacion.childNodes); //Los espacios en blanco son considerados elementos
// console.log(navegacion.children); //Los espacios en blanco son considerados elementos

// console.log(navegacion.children[0].nodeName);
// console.log(navegacion.children[0].nodeType);


// const card = document.querySelector('.card');
// card.children[1].children[1].textContent = 'nuevo contenido de texto';
// console.log(card.children);

// console.log(card.parentElement);

// console.log(card);
// console.log(card.nextElementSibling);
// console.log(card.nextElementSibling.nextElementSibling);

const ultimoCard = document.querySelector('.card:nth-child(4)')
console.log(ultimoCard.previousElementSibling);

