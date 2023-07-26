localStorage.setItem('nombre', 'Cristian'); 


const producto ={
    nombre: 'Monitor', 
    precio: 3000
}

//guardado de un objeto
localStorage.setItem('producto', JSON.stringify(producto)); 

//guardado de un arreglo 

const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio']; 

localStorage.setItem('meses', JSON.stringify(meses)); 


//obtener datos de localStorage

const nombre = localStorage.getItem('nombre'); 
console.log(nombre)

//si no existe el item, retorna null
const aux = localStorage.getItem('aux'); 
console.log(aux)

const productoJson = localStorage.getItem('producto'); 
console.log(JSON.parse(productoJson)); 

const mesesJson = localStorage.getItem('meses'); 
console.log(JSON.parse(mesesJson)); 


//eliminar un item de localStorage 
localStorage.removeItem('nombre'); 
console.log(localStorage.getItem('nombre')); //imprime null ya que ha sido eliminado el item


/**
 * no existe como tal el update en localStorage, solo se sobreescribe 
 * el valor del item dado
 */

meses.push('julio'); 
meses.push('agosto');

localStorage.setItem('meses', JSON.stringify(meses)); 
console.log(JSON.parse(localStorage.getItem('meses'))); 


// elimina todo lo del localstorage

localStorage.clear(); 