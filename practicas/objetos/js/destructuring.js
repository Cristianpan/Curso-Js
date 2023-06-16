/**
 * La destructuracion ermite desempacar los valores de los objetos en 
 * distintas variables para poder extraer los datos. En el caso de los objetos 
 * es necesario que las variables tengan el mismo nombre de una clave de propiedad del objeto. 
 * En caso de no ser asi, se obtiene un undefined
 */

const producto = {
    nombre: 'Tablet', 
    precio: 200, 
    disponible: true, 
}

//destructuracion 

const {nombre, precio, disponible} = producto;

console.log(nombre, precio, disponible); //Tablet 200 true

const {hola} = producto; 
console.log(hola); //undefined


//Para darle un nuevo nombre de variable, la sintaxis es la siguiente
const {nombre: name} = producto;  
console.log(name); //tablet

//Tambien es posible dar valores predeterminados 
const {nombre2 = "Juan"} = producto;

console.log(nombre2);//Juan

const {saludo = "Hola"} = producto;
console.log(saludo); //Hola