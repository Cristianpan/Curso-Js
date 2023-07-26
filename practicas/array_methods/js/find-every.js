const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500},
    {nombre: 'Telefono', precio: 1000},
    {nombre: 'Tablet', precio: 5000},
    {nombre: 'Audifons', precio: 200},
    {nombre: 'Teclado', precio: 800},
];


/**
 * find retorna el primer elemento especifico de un arreglo 
 * dada una condición. Si ningun elemento cumple la condicion, retorna 
 * undefined
 */

let result = carrito.find(producto => producto.nombre === 'Tablet');

console.log(result);


/**
 * every, a diferencia de some, retorna true 
 * si todos los elementos de un arreglo cumplen la condicion dada,
 * en caso contrario, retorna false
 */

result = carrito.every(producto => producto.nombre === 'Tablet'); 

console.log(result);

result = carrito.every(producto => producto.precio > 0); 

console.log(result);
