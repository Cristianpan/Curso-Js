//Mixin pattern
class Alumno {
    constructor(nombre, matricula, edad) {
        this.nombre = nombre; 
        this.matricula = matricula; 
        this.edad = edad; 
    }
}


const funcionesAlumno = {
    mostrarInformacion(){
        console.log(`Nombre persona ${this.nombre} ${this.matricula}`);
    }
}

Object.assign(Alumno.prototype, funcionesAlumno); 

const estudiante = new Alumno('Cristian', '216a12313', 23); 

console.log(estudiante); 
estudiante.mostrarInformacion()