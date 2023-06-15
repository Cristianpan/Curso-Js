let num = 30; 
let num2 = 20; 
let resultado = 0; 

//suma 
resultado = num + num2;

//resta 
resultado = num - num2; 

//multiplicacion
resultado = num * num2; 

//division 
resultado = num / num2; 

//modulo - residuo
resultado = num % num2;

//incremento en 1
num++; 
num += 1; 

//decremento en 1; 
num--; 
num -= 1; 

/**
 * Existe una diferencia en el caso de utilizar num++ o ++num, e igual con el decremento
 * Si predesucede a la varible, el incremente se realiza antes de y si sucede, se realiza después de.
 */

console.log(num++); //30
console.log(++num); //32 ya que anteriormente se sumo 1 t antes de imprimir, se suma 1 tambien


