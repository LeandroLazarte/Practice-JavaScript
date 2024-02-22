// Objeto literal
const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
}

// Objeto constructor
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const productoDos = new Producto('iPhone 14 Pro Max', 5000);
console.log(productoDos);

const productoTres = new Producto('Samsung Smart TV 4K', 100.000);
console.log(productoTres);

