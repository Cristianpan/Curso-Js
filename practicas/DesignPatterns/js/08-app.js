
class Vendedor {
    constructor(nombre){
        this.nombre = nombre; 
        this.sala = null; 
    }

    oferta(articulo, precio) {
        console.log(`Tenemos el siguiente artículo ${articulo}, iniciamos con un precio de $${precio}`); 
    }

    vendido(comprador){
        console.log(`Vendido a ${comprador}`); 
    }
}

class Comprador{
    constructor(nombre) {
        this.nombre = nombre; 
        this.null = null; 
    }

    oferta(cantidad){
        console.log(`${this.nombre} : ${cantidad}`); 
    }
}

class Subasta {
    #compradores = {}

    registrar(usuario){
        this.#compradores[usuario.nombre] = usuario; 
        usuario.sala = this; 
    }
}


const pedro = new Comprador('Pedro'); 
const cristian = new Comprador('Cristian'); 
const vendedor = new Vendedor('Vendedor de Autos'); 
const subasta = new Subasta(); 

subasta.registrar(pedro); 
subasta.registrar(cristian); 
subasta.registrar(vendedor); 

vendedor.oferta('Mustang 66', 300); 
pedro.oferta(400); 
cristian.oferta(500);
pedro. oferta(700);  

vendedor.vendido('Pedro'); 