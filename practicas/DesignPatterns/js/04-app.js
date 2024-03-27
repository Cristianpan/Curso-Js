class InputHTML {
  constructor(type, nombre) {
    this.type = type;
    this.nombre = nombre;
  }

  crearInput() {
    return `<input type="${this.type}" name="${this.nombre}" id="${this.nombre}">`;
  }
}

class HTMLFactory{
    static crearElemento(tipo, nombre){
        switch(tipo){
            case 'text': 
                return new InputHTML('text', nombre);
            case 'tel': 
                return new InputHTML('tel', nombre); 
            case 'email': 
                return new InputHTML('email', nombre); 
            default: return; 
        }
    }
}

const elemento = HTMLFactory.crearElemento('text', 'nombre-cliente'); 
console.log(elemento.crearInput()); 
const elemento2 = HTMLFactory.crearElemento('tel', 'telefono-cliente'); 
console.log(elemento2.crearInput()); 
const elemento3 = HTMLFactory.crearElemento('email', 'email-cliente'); 
console.log(elemento3.crearInput()); 