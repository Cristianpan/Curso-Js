// foreach 

const pendientes = ['tarea', 'comer', 'proyecto', 'estudiar javascript'];


pendientes.forEach(pediente=> console.log(pediente) )



/**
 * map es utilizado para realizar transformaciones a los valores de un arreglo, 
 * además de que map retorna un nuevo arreglo con las transformaciones.
 */
const numbers = [1, 2, 3, 4, 5, 6, 7]; 

const squaredNumbers = numbers.map(number => number * number);


console.log(...squaredNumbers);