function suma(a, b){
    return a + b; 
}

function restar(a, b) {
    return a - b; 
}

let resultado = suma(1,2); 
let esperado = 3; 

expected(esperado).toBe(resultado); 

resultado = restar(5, 2); 
esperado = 3; 
expected(esperado).toBe(resultado); 
expected(esperado).toEqual(resultado); 



function expected(esperado) {
    return {
        toBe(resultado){
            if (resultado !== esperado) {
                console.log(`El resultado ${resultado} de la operación es diferene de lo esperado, no ha pasado la prueba`); 
            } else {
                console.log('La prueba ha pasado correctamente'); 
            }
        },
        toEqual(resultado){
            if (resultado !== esperado) {
                console.log(`El resultado ${resultado} no es igual a lo esperado, no ha pasado la prueba`); 
            } else {
                console.log('La prueba ha pasado correctamente'); 
            }
        }
    }
}

