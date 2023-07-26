/**
 * La posicion de la variable cuando aplicamos la destructuracion, 
 * corresponde al valor en la posicion original del arreglo
 */

const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo'];

//omitir valores con ,
const [enero, febrero,,,mayo] = meses; 

console.log(enero);
console.log(febrero);
console.log(mayo);

//Asigando el resto del arreglo a una variables
const [primerMes, ...resto] = meses; 

console.log(primerMes);
console.table(resto);