const carrito = [
    {nombre: 'Monitor 1', precio: 500}, 
    {nombre: 'Monitor 2', precio: 200}, 
    {nombre: 'Monitor 3', precio: 130}, 
    {nombre: 'Monitor 4', precio: 320}, 
    {nombre: 'Monitor 5', precio: 100}, 
    {nombre: 'Monitor 6', precio: 520}, 
]

const mayor400 = producto => {
    return producto.precio > 400; 
}

const resultado = carrito.filter(mayor400); 
console.log(carrito); 
console.log(resultado); 
