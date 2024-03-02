function suma(a, b){
    return a + b; 
}

function restar(a, b) {
    return a - b; 
}

async function sumaAsincrona(a,b) {
    return Promise.resolve(suma(a,b)); 
}

let resultado = suma(1,2); 
let esperado = 3; 

expected(esperado).toBe(resultado); 

resultado = restar(5, 2); 
esperado = 3; 
expected(esperado).toBe(resultado); 
expected(esperado).toEqual(resultado); 
text('Suma 10 + 20 y el resultado debe ser 30', async () => {
    const resultado = await sumaAsincrona(10, 20); 
    const esperado = 30; 
    expected(esperado).toBe(30); 
})


async function text(mensaje,callback) {
    try {
        await callback(); 
        console.log(`El Test: ${mensaje} se ejecutó correctamente`);
    } catch (error) {
        console.log("Error"); 
        console.log(erro); 
    }
}

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

