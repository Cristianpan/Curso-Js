/**
 * La palabra reservada this hace referencia a los valores que se encuentran dentro de un mismo objeto
 */
const producto = {
    nombre: 'Tablet', 
    precio: 200, 
    disponible: true, 
    mostrarInfo: function (){
        console.log(`El producto ${this.nombre} tiene un precio de ${this.precio}`);
    }
}
const producto2 = {
    nombre: 'Celular', 
    precio: 3000, 
    disponible: true, 
    mostrarInfo: function (){
        console.log(`El producto ${this.nombre} tiene un precio de ${this.precio}`);
    }
}

producto.mostrarInfo();
producto2.mostrarInfo();
