const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500},
    {nombre: 'Telefono', precio: 1000},
    {nombre: 'Tablet', precio: 5000},
    {nombre: 'Audifons', precio: 200},
    {nombre: 'Teclado', precio: 800},
];


carrito.forEach(element => {
    console.log(`${element.nombre} - Precio: $${element.precio}`);
});

//retorna un nuevo arreglo
const carrito2 = carrito.map(element => {
    return {nombre: element.nombre, precio: element.precio * 2}
});

console.table(carrito2);