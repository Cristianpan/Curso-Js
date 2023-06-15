/**
 * A pesar de que producto es un tipo de dato primitivo
 * js realiza una conversión temporal en memoria a un objeto String cuando
 * intentamos acceder a métodos de dicho objeto.
 */
const producto = "Monitor 20 pulgadas";

//Conocer la longitud de un texto;
console.log(producto.length);

/**
 * Conocer si una palabra existe en un string
 * return true, si existe 
 * return false, si no existe
 */
console.log(producto.includes("Monitor"));

/**
 * Obtener el indice desde donde inicia una palabra en un string
 * string.indexOf(value) retorna -1 si no se encuentra la palabra
 * retorna >= 0, en caso contrario
 */
console.log(producto.indexOf("Hola")); //-1
console.log(producto.indexOf("Monitor")); //0

//Eliminar espacios vacios en un string

const nombre = " Cristian Pan "

//Elimina el espacio del inicio; 
console.log(`-${nombre.trimStart()}.`); //-Cristian Pan .

//Elimina el espacio al final
console.log(`-${nombre.trimEnd()}.`); //- Cristian Pan.

//Elimina los espacios al inicio y al final 
console.log(`-${nombre.trim()}.`); //-Cristian Pan.


//Remplazar texto dentro de string

const productoNuevo = 'Monitor 20 pulgadas'; 

//Remplaza la primera coincidencia por el string dado
console.log(productoNuevo.replace('a', 'e')); //Monitor 20 pulgedas

//Remplaza todas las coincidencias por el string dado
console.log(productoNuevo.replaceAll('a', 'e')); //Monitor 20 pulgedes

//Cortar strings
console.log(productoNuevo.slice(0, 10));

console.log(productoNuevo.substring(0,10));

//Obtener un caracter especifico 
console.log(nombre.trim().charAt(0)); //C

//repeat repite un texto una cantidad de veces especifica 
const texto = "Hola ".repeat(3); 

console.log(texto);

//Split divide un string dado un separador, retornando un arreglo con los elementos
const hobbits = "leer, caminar, escuchar música, escribir, aprender a programar"

console.log(hobbits.split(","));

//Convertir textos a mayusculas
console.log(productoNuevo.toUpperCase());

//Convertir textos a minusculas 
console.log(productoNuevo.toLowerCase());