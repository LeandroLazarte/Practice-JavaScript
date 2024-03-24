const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];
const mesesDos = ["Julio", "Agosto", "Septiembre"]
const mesesTres = ["Octubre", "Noviembre", "Diciembre"];

// .concat
const resultado = meses.concat(mesesDos, mesesTres);
console.log(resultado);

// Spreed Operator
const resultadoDos = [...meses, ...mesesDos, ...mesesTres];
console.log(resultadoDos);