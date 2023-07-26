/**
 * undefined es el valor por defecto de una variable que no ha sido inizalizada 
 * mientras que null es un valor explicito dado por el programador y ambar representan lo mismo 
 * sin embargo son diferentes. undefined es un tipo de dato primitivo mientras que 
 * null es un objeto
 */

let numero; 
console.log(typeof numero); //undefined

let numero2 = null;

console.log(typeof numero2); //object

console.log(numero2 === numero); //false