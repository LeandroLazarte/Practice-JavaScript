const cardDiv = document.querySelector('.card');

cardDiv.addEventListener('click', (e) => {
    if(e.target.classList.contains('titulo')){
        console.log('Diste click en el titulo');
    }
})
cardDiv.addEventListener('click', (e) => {
    if(e.target.classList.contains('precio')){
        console.log('Diste click en el precio');
    }
})
cardDiv.addEventListener('click', (e) => {
    if(e.target.classList.contains('.card')){
        console.log('Diste click en el card');
    }
})