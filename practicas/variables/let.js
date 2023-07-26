/**
 * let a diferencia de var tiene un alcance de bloque. Por lo que
 * una variable declarada por let solo está disponible dentro de su bloque.
 * Al igual que var, por defecto una variable let se inicializa con undefined
 */

let saludar = "dice Hola Mundo";
let tiempos = 4;

if (tiempos > 3) {
     let saludar = "dice Hola people";
     console.log(saludar);// "dice Hola people"
 }
console.log(saludar) // "dice Hola Mundo"

//Inicialización y declaración de variable 
let producto = "Celular";

//Reasignacion de valor
producto = "Tableta"

//Asignacion multiple 
let num1, num2 = 0; 

console.log(num1); //undefined
console.log(num2); //0 