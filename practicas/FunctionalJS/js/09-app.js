const suma = (a, b, c) => a + b + c;

const parcial = (a) => (b, c) => a + b + c;

const primerNumero = parcial(5);
const resultado = primerNumero(3, 2);
console.log(resultado);

const currying = (a) => (b) => (c) => a + b + c;

const resultado2 = currying(4)(3)(9); 
console.log(resultado2); 
