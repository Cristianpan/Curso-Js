/**
 * WeakSet
 * solo aceptan objetos
 * no se puede conocer el numero de elementos que tiene
 * no son iterables
 * 
*/

const weakSet = new WeakSet();

const cliente1 = {
  nombre: "Cristian",
  saldo: 100,
};

const cliente2 = {
  nombre: "Cristian",
  apellido: "Zaldivar",
};
const cliente3 = {
  nombre: "Cristian",
  apellido: "Romero",
};

weakSet.add(cliente1);
weakSet.add(cliente2);
weakSet.add(cliente3);

console.log(weakSet.has(cliente1));

console.log(weakSet.delete(cliente2)); 
