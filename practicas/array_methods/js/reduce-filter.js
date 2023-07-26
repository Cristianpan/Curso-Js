const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500},
    {nombre: 'Telefono', precio: 1000},
    {nombre: 'Tablet', precio: 5000},
    {nombre: 'Audifons', precio: 200},
    {nombre: 'Teclado', precio: 800},
];

/**
 * Reduce permite crear una variable con un 
 * acumulado de datos a través de un array
 */


const resultado = carrito.reduce ((total, producto) => total + producto.precio, 0);

console.log(resultado);


/**
 * filter permite crear un nuevo arreglo con 
 * los elementos que cumplan con una condición dada. 
 */
const newCarrito = carrito.filter(producto => producto.precio > 500); 

console.table(newCarrito); 