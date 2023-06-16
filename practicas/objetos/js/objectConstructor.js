//object literal
const producto = {
    nombre: 'Tablet', 
    precio: 200, 
    disponible: true, 
}

//object constructor
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
        this.disponible = true;
    }
}

const producto2 = new Producto('iPhone1000', 20102313);

console.log(producto2);