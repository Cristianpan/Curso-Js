//Explicit binging

function persona(el1, el2) {
  console.log(`Mi nombre es ${this.nombre} y Como ${el1} y ${el2}`);
}

const informacion = {
  nombre: "Juan",
};

const comidaFavorita = ["Pechuga", "Frijol"];

//paso de elementos de forma individual
persona.call(informacion, comidaFavorita[0], comidaFavorita[1]);

//paso de elementos en forma de arreglo 
persona.apply(informacion, comidaFavorita); 

//similar a call pero retorna una funcion
const nuevaFn = persona.bind(informacion, comidaFavorita[0], comidaFavorita[1]); 
