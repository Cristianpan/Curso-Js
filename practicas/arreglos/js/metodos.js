const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo'];


//longitud de un arreglo
const arrayLenght = meses.length; 

//for
for (let i = 0; i < arrayLenght; i++){
    console.log(meses[i]);
}

//for each 
meses.forEach(mes => {
    console.log(mes);
});
console.table(meses); 


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

//Agregar elemento al final del arreglo
carrito.push(producto); 

//Agregar al inicio del arreglo 
carrito.unshift(producto2);

//Agregar elemento con spread operator
carrito = [...carrito, producto3];
carrito = [producto3, ...carrito];

console.table(carrito);




