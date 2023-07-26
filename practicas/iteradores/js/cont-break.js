const dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']; 

for (let i = 0; i < dias.length; i++){
    if (dias[i] === 'miercoles'){
        console.log(dias[i]);
        continue;//continue salta a la siguiente iteración si entra a la condición
    }

    console.log(dias[i]);
}


for (let i = 0; i < dias.length; i++){
    if (dias[i] === 'miercoles'){
        console.log(dias[i]);
        break;//break termina la ejecucion del ciclo si entra a la condicion
    }

    console.log(dias[i]);
}


//ejercicio fizz buzz


for (let i = 0; i < 30; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log(`${i} Fizz Buzz`); 
    } else if (i % 3 === 0) {
        console.log(`${i} Fizz`); 
    } else if (i % 5 === 0){
        console.log(`${i} Buzz`); 

    }
}