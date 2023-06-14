/**
 * Js es un lenguaje de tipo dinamico, ya que no se especifica el tipo d
 * de dato.
 * Js utiliza cambalCase y PascalCase
 */

// variable var

//Declaración e inicialización de una variable
var producto = "Monitor de 24 pulgadas";
console.log(producto);

//reasignacion de valor de la variable
producto = "Celular iPhone";
console.log(producto);

/**
 * Declaracion de variable
 * Por defecto el valor de una variable es undefined
 */
var disponible;
//asignacion de valor
disponible = true;

//Inicializar multiples variables
var x,
  y,
  z = 0;

/**
 * No se recomienda su uso debido a que tiene un comportamiento de
 * funcion o global. Es decir que estará disponible en todo el ámbito
 * de la función o global, pudiendo generar comportamientos inesperados.
 */

var saludar = "hey, hola";
var tiempos = 4;

if (tiempos > 3) {
  var saludar = "dice Hola tambien";
}

console.log(saludar); // "dice Hola tambien"
