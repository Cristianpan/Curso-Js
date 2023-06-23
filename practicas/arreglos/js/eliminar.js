let carrito = [];

//Definir un producto 
const producto = {
    nombre: "Monitor 32 pulgadas", 
    precio: 400,
}

const producto2 = {
    nombre: "Celular", 
    precio: 4000,
}

const producto3 = {
    nombre: "Teclado", 
    precio: 200,
}
const producto4 = {
    nombre: "Mouse", 
    precio: 100,
}

carrito.push(producto); 
carrito.push(producto2);
carrito.push(producto3);
carrito.push(producto4);

//eliminar elementos
carrito.splice(2, 1);

//eliminar último elemento 
//carrito.pop(); 

//Eliminar del inicio del arreglo
//carrito.shift();






console.table(carrito); 