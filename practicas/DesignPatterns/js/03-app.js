//Singleton

class Persona {
    constructor(nombre, email){
        if (typeof Persona.instance === "object"){
            return Persona.instance; 
        } 

        this.nombre = nombre; 
        this.email = email; 
        Persona.instance = this; 
    }
}

const persona = new Persona("Cristian", "Pan@correo.com");
console.log(persona);  
const persona2 = new Persona("David", "Pan@correo.com");
console.log(persona2);  