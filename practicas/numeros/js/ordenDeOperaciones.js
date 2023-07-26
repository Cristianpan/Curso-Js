let resultado; 

/**
 * Las operaciones se realizan conforme a la presedencia de operadores. 
 * Si se agrupa entre parentecis, se rompe esa presedencia.
 */

resultado = 20 + 30 * 2; //80
console.log(resultado);

resultado = (20 + 30) * 2; //100
console.log(resultado);