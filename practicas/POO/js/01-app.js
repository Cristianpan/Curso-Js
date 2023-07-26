//Class declaration

class Cliente {
    static Empresa = "BBVA";

    constructor(nombre = "", apellido = "", saldo = 0) {
        this.nombre = nombre; 
        this.apellido = apellido; 
        this.saldo = saldo; 
    }

    static mostrarEmpresa() {
        return Cliente.Empresa; 
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, ${this.apellido}. Tu saldo es de: ${this.saldo} `
    }
}

console.log(Cliente.mostrarEmpresa())
const Cristian = new Cliente('Cristian', 'Pan'); 
console.log(Cristian.mostrarInformacion()); 

//class expression
const Persona = class {
    constructor(nombre, apellido){
        this.nombre = nombre; 
        this.apellido = apellido; 
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, ${this.apellido}`
    }
}

const Juan = new Cliente('Juan', 'Perez'); 
console.log(Juan); 