//Un objeto agrupa todo en una sola variable 

//object literal
const producto = {
    nombre: 'Tablet', 
    precio: 200, 
    disponible: true, 
}

console.log(producto); 

/**
 * Es posible acceder a los valores de un objeto a través de un punto o con 
 * los corchetes
 */

console.log(producto.nombre); //tablet
console.log(producto['nombre']); //tablet

/**
 * Para agregar nuevas propiedades se puede usar el acceso de punto con el nombre
 * de la propiedad. 
 */

producto.cantidad = 200; 

/**
 * Para eliminar una propiedad del objeto se usa delete object.property
 */

delete producto.disponible; 

console.log(producto);


const producto2 = {...producto};

console.log(producto == producto2);