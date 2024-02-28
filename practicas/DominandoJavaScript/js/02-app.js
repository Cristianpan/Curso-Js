/**
 * hoisting
 * primera etapa se registran las funciones 
 * segunda etapa se ejecutan las funciones 
 * no hay hosting con variables let y const 
*/


obtenerCliente('Juan'); 
function obtenerCliente(cliente) {
    console.log(cliente); 
}

//obtenerCliente2('Pablo'); muestra error por cómo funciona el hosting en funciones expresadas
const obtenerCliente2 = function(nombre) {
    console.log(`El nombre del cliente es ${nombre}`); 
}

/**
 * Lo que ocurre por detrás es: 
 * var mensaje; 
 * console.log(mensaje); 
 * mensaje = "hola mundo"; 
 */
console.log(mensaje); //undefined
var mensaje = "Hola mundo"; 

console.log(mensaje2); //error porque no se realiza el proceso de hoisting
let mensaje2 = "Hola mundo"; 