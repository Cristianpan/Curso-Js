const auth = false; 
const admin = false; 

if (admin){
    console.log('Is Admin...')
} else if (auth) {
    
    console.log('Login...')
}else {
    console.log('Credenciales incorrectas');
}

const persona = {
    nombre: 'Juan', 
    apellido: 'Pérez'
}

const persona1 = {
    nombre: 'Juan', 
    apellido: 'Perez'
}

/**
 * Al realizar la comparacion de los obejtos, lo que se compara son las direcciones 
 * de memoria, por lo tanto el resultado es false. 
 */
if (persona === persona1) {
    console.log('Es la misma persona');
} else {
    console.log('Son direntes');
}


/**
 * Comparador estricto ===, compara tanto valor como tipo de dato
 * Comparador no estricto ==, compara solo el valor 
 */

if ("10" == 10) console.log("Son iguales");

if ("10" === 10) console.log("No son iguales"); //La condición retorna false y no imprime nada


//Comparador <=, <, >=, > 

if (10< 5) {
    console.log("10 es menor que 5")
} else if (10>5) {
    console.log("10 es mayor que 5")
}

//Switch
const metodoDePago = 'tarjeta'; 

switch(metodoDePago) {
    case 'efectivo': 
        console.log("El pago fue en efectivo"); break; 
    case 'tarjeta': 
        console.log("El pago fue en tarjeta"); break;
    default: 
        console.log('No se ha realizado el pago'); 
}

//Operador && and or

const number = 15; 
if (number % 3 === 0 && number % 5 === 0){
    console.log(`${number} es multiplo de 5 y de 3`);
} else if (number % 3 === 0 || number % 5 === 0){
    console.log(`${number} es multiplo de 5 o de 3`);
} else {
    console.log(`${number} no es multiplo de 5 ni de 3`);
}


//operador ternario 

const winner = true; 

winner ? console.log("Feliciades por la victoria") : console.log('Lo sentimos... intenta nuevamente');