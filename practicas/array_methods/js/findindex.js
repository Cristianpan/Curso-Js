const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500},
    {nombre: 'Telefono', precio: 1000},
    {nombre: 'Tablet', precio: 5000},
    {nombre: 'Audifons', precio: 200},
    {nombre: 'Teclado', precio: 800},
];

const dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']; 


/**
 * Index of retorna el indice de un elemento 
 * en el arreglo, si no existe, retorna -1. 
 * Este metodo no funciona en arreglo de objetos
 */
let index = dias.indexOf('miercoles');
console.log(index);



/**
 * findIndex es un metodo de un arreglo 
 * para encontrar el indice del elemento dado, 
 * retorna -1 en caso que no exista. A diferencia 
 * de indexOf, este si es posible usarlo con arreglo de objetos
 */

index = dias.findIndex(dia => dia === 'viernes'); 

console.log(index)

index = carrito.findIndex(producto => producto.nombre === 'Tablet');
console.log(index)


