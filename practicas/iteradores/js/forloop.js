//for loop

for(let i = 0; i < 10; i++){
    console.log(i);
}

//obtener pares 

for (let i = 0; i < 10; i++){
    i % 2 === 0 ? console.log(`El numero ${i} es par`): console.log(`El numero ${i} es impar`);
}


//recorrer un arreglo
const dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']; 

for (let i = 0; i < dias.length; i++){
    console.log(dias[i]);
}