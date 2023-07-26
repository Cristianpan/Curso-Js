const num1 = "20";
const num2 = "20.2";
const num3 = "uno";
const num4 = 20; 
const num5 = 20.5; 

console.log(Number.parseInt(num1));
console.log(typeof Number.parseInt(num1));

console.log(Number.parseFloat(num2));
console.log(typeof Number.parseFloat(num2));

console.log(Number.parseFloat(num3));
console.log(typeof Number.parseFloat(num3));

//Otras formas de parsear a numer

const num = "20"
//Objeto number
console.log(typeof Number(num));

//Operador unario (+,-)
console.log(typeof +num);

//Math.floor
console.log(typeof Math.floor(num));

//Con parseInt() o parseFloat
console.log(typeof parseInt(num));

//Revisar si un numero es entero o no 

console.log(Number.isInteger(num4));
console.log(Number.isInteger(num5));

