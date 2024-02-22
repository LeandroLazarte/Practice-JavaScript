// Carrito de compras con impuestos

// Varibale inicializada en 0
let total = 0;

// Funcion para agregar productos al carrito y sumarlos
function agregarCarrito(precio) {
    return total += precio;
}

total = agregarCarrito(1000);
total = agregarCarrito(3000);
total = agregarCarrito(500);

console.log(`El total de su compra es: $${total}`);

// Funcion para calcular al precio total los impuestos correspondientes
function calcularImpuesto(total) {
    return total * 1.15;
}

const totalImpuesto = calcularImpuesto(total);

console.log(`El total de su compra con impuestos es: $${totalImpuesto}`);
