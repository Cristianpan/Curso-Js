const carrito = new Set();

carrito.add("Camisa");
carrito.add("Disco 1");
carrito.add("Disco 2");

//set.has() para conocer si existe un elemento
console.log(carrito.has("Camisa"));

//set.size para conocer el numero de elementos
console.log(carrito.size);

/**set.delete() para eliminar un elemento
 * 
 * retorna true si el elemento existe y fue borrado, 
 * en caso contrario retorna false
 *
 */
console.log(carrito.delete("Disco 1"));

//carrito.clear() elimina todos los elementos

console.log(carrito);


//Del siguiente arreglo eliminar los duplicados

const numeros = [10, 20, 30, 40, 50, 10, 20]; 

const noDuplicados = new Set(numeros); 

console.log(noDuplicados); 
