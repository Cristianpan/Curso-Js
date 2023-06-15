//valores primitivos de booleanos
const bool = true; 
const bool2 = false; 

//Creacion de objeto de tipo boolean
const boolean4 = new Boolean(true);


//Comparar booleanos
console.log(bool === bool2);

/**
 *  Retorna falso debido a que js 
 *  al realizar comparaciones convierte a numeros los booleanos 
 *  true = 1, false = 0, 
 */
console.log(bool == "true");

//Operador ternario; 

const auth = true; 

console.log( auth ? 'Usuario Autenticado': 'Registrate');