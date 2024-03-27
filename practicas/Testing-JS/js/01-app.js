// Probar dos valores 

function suma(a, b){
    return a + b; 
}

function restar(a, b) {
    return a - b; 
}

let resultado = suma(1,2); 
let esperado = 3; 

if (resultado !== esperado) {
    console.log('El resultado de la operación es diferene de lo esperado, no ha pasado la prueba'); 
} else {
    console.log('La prueba ha pasado correctamente'); 
}

resultado = restar(5, 2); 
esperado = 3; 

if (resultado !== esperado) {
    console.log('El resultado de la operación es diferene de lo esperado, no ha pasado la prueba'); 
} else {
    console.log('La prueba ha pasado correctamente'); 
}
 
