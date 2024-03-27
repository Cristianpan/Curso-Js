function *crearGenerador(){
    yield 1; 
    yield 'Juan'; 
    yield 3*3; 
    yield true; 
}

const iterador = crearGenerador(); 

console.log(iterador); 
console.log(iterador.next().value); 
console.log(iterador.next().done); 
console.log(iterador.next().value); 
console.log(iterador.next().done); 

// Generador para carrito de compras 

function *generadorCarrito(carrito) {
    for(let i = 0; i < carrito.lenght; i++){
        yield carrito[i];
    }
}

const carrito = [ 'Producto 1', 'Producto 2', 'Producto 3']; 
const iteradorCarrito = generadorCarrito(carrito); 

console.log(iteradorCarrito.next()); 
console.log(iteradorCarrito.next()); 
console.log(iteradorCarrito.next()); 
console.log(iteradorCarrito.next()); 