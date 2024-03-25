// Switch Case

const metodoPago = 'tarjeta';


switch (metodoPago) {
    case 'efectivo':
        console.log(`Tenemos ${metodoPago} para abonar`);
        break;
    case 'cheque':
        console.log(`Tenemos ${metodoPago} para abonar`);
        break;
    case 'tarjeta':
        console.log(`Tenemos ${metodoPago} para abonar`);
        break
    default:
        console.log(`No se selecciono ningun metodo de pago`);
        break;
}