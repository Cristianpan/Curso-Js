const sym = Symbol('1'); 
const sym2 = Symbol('1'); 

console.log(sym === sym2); 

const nombre = Symbol(); 
const apellido = Symbol(); 

const persona = {}

persona[nombre] = 'Cristian'; 
persona[apellido] = 'Pan'; 
persona.tipoCliente = 'Premium'; 
persona.saldo = 5000; 

console.log(persona); 
console.log(persona[nombre]); 

// los symbol no son iterables 
for (let property in persona){
    console.log(property); 
}

// agregar descripcion 
const direccion = Symbol('direccion de la persona'); 
persona[direccion] = "Calle 14 21312";

console.log(persona); 
console.log(persona[direccion]); 