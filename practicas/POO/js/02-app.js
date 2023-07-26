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

class ClientePremium extends Cliente {
    #credito = 20000; 

    constructor(nombre = "", apellido = "", saldo = 0) {
        super(nombre, apellido, saldo); 
    } 

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, ${this.apellido}. Tu saldo es de: ${this.saldo}. Tu credito es de: ${this.#credito}`;  
    }

    getCredito(){
        return this.#credito; 
    }
}

const clientePremium = new ClientePremium("Cristian", "Pan", 2000); 

console.log(clientePremium.mostrarInformacion()); 
console.log(clientePremium.credito);  //undefined; 
console.log(clientePremium.getCredito()); 