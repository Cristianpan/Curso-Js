/**
 * El DOM (document object model) es una representacion
 * del contenido del documento HTMl, que proporciona una forma de
 * acceder a los diferentes elementos que la componen.
 * El DOM organiza el documento en una estructura de arbol, donde cada
 * nodo representa una etiqueta, a los cuales podemos acceder, eliminar o modificar.
 *
 */

//Formas de seleccionar elementos del DOM

let elemento = document;
elemento = document.forms;
elemento = document.links;
console.log(elemento);

//Obtener un elemento especifico solo por su clase

const header = document.getElementsByClassName("header");
console.log(header);

const hero = document.getElementsByClassName("hero");
console.log(hero);

/** 
 * Si las clases se repiten más de una vez, retorna todos los elementos 
 * que coincidan con esta
 */

const contenedor = document.getElementsByClassName('contenedor'); 
console.log(contenedor);

