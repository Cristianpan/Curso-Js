const persona = {
    nombre: 'Cristian', 
    apellido: 'Pan', 
    telefono: '9993981242', 
    direccion: {
        calle: '24', 
        numero: '123', 
        colonia: 'Uman',
    }
}

console.log(persona);

//Acceso a datos de objetos anidados

console.log(persona.direccion.calle); //24; 

//Destructuracion de objetos anidados 
const {nombre, direccion: {calle, numero, colonia}} = persona;

console.log(nombre); 
console.log(calle); 
console.log(numero); 
console.log(colonia); 

//Spread operator para 'unir' objetos; 

const credenciales = {
    escuela: 'UADY', 
    matricula: '123123123', 
    licenciatura: 'Ing. Software', 
    semestre: 3
}

const alumno = {...persona, ...credenciales}; 
console.log(alumno);