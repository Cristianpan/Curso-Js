const producto = {
  nombre: "Tablet",
  precio: 200,
  disponible: true,
};

//Object.keys() retorna un arreglo con el nombre de los atributos de un objeto
console.log(Object.keys(producto));

//Object.values() retorna un arreglo con los valores de los atributos de un objeto
console.log(Object.values(producto));

/*
 * Object.entries() retorna un arreglo de pares 'ordenados', donde el primer valor
 *es el nombre del atributo del objeto, y el segundo su valor
 */
console.log(Object.entries(producto));
