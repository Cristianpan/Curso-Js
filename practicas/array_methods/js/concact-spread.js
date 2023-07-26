const numbers = [1,2,3,4,5];

const numbers2 = [7,8,9,10];

/**
 * concact es utilizada para fusionar dos arreglos. 
 * Este metodo no modifica los arreglos originales, si no 
 * que retorna la fusion como un nuevo arreglo
 */


const result = numbers.concat(numbers2);

console.log(result);

/**
 * otra forma de fusionar dos arreglos es através del spread operator 
 */


const newArray = [...numbers,...numbers2]; 
console.log(newArray);


const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500},
    {nombre: 'Telefono', precio: 1000},
    {nombre: 'Tablet', precio: 5000},
    {nombre: 'Audifons', precio: 200},
    {nombre: 'Teclado', precio: 800},
];



/**
 * spread operator con map, para poder 
 * generar un copia tanto del arreglo com de los objetos 
 * existentes para no modificar los valores del arreglo original 
 */
const carrito2 = [...carrito.map(item => ({...item})), {nombre: 'Disco Duro', precio: 1000}];


console.log(carrito2);
