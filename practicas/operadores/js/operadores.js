const num1 = 20; 
const num2 = "20"; 
const num3 = 30;

//Operador mayor a...
console.log(num1 > num3); //false
console.log(num3 > num1); //true

//Operador menor a 
console.log(num1 < num3); //true

//Revisar si dos numeros son iguales 

console.log(num1 == num3); //false
console.log(num1 == num2); //true

/**
 * Existe dos tipos de igualdades, si se utiliza ==, verifica que el valor sean 
 * iguales, el segundo tipo es estricto ===, verifica que tanto el valor 
 * como el tipo sean iguales 
 */

console.log(num1 === num2);//false 

//Comparar si son diferetes

console.log(num1 != num2); //false
console.log(num1 != num3); //true

/**
 * De la misma forma que en igualdad, si solo se usa !=, compara los valores, 
 * si se utiliza !==, compara valores y tipo de dato
 */
console.log(num1 !== num2); //true
console.log(num1 !== num3); //true




