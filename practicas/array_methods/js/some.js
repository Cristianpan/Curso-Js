const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500},
    {nombre: 'Telefono', precio: 1000},
    {nombre: 'Tablet', precio: 5000},
    {nombre: 'Audifons', precio: 200},
    {nombre: 'Teclado', precio: 800},
];



/**
 * Itera sobre un arreglo y retorna true si 
 * existe una coincidencia dada la condicion, en caso contrario 
 * retorna false 
 */

let exist = carrito.some(producto => producto.nombre === 'Tablet');
console.log(exist);

exist = carrito.some(producto => producto.nombre === 'Reloj');

console.log(exist);

/**
 * Tambien existe el includes, sin embargo includes 
 * solo verifica si un elemento dato existe, retorna true en caso de que si, false 
 * en caso contrario
*/

const dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']; 

exist = dias.includes('Marzon');
console.log(exist);

exist = dias.includes('lunes');
console.log(exist);