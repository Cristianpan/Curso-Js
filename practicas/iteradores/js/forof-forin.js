const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500},
    {nombre: 'Telefono', precio: 1000},
    {nombre: 'Tablet', precio: 5000},
    {nombre: 'Audifons', precio: 200},
    {nombre: 'Teclado', precio: 800},
];

const pendientes = ['tarea', 'comer', 'proyecto', 'estudiar javascript'];

/**
 * for of permite la iteración a través de los valores de objetos 
 * iterables 
 */
for (let pendiente of pendientes){
    console.log(pendiente);
}

for (let {nombre, precio}  of carrito){
    console.log(`${nombre} - Precio : ${precio}`);
}


/**
 * for in permite la iteración a través de las claves de un objeto
 */


for (let producto of carrito ){
    for (let key in producto){
        console.log(`${key} : ${producto[key]}`);
    }
}