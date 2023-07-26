/**
 * querySelector sirve para obtener los elementos
 * del DOM ya sea a través del id, className o alguna propiedad,
 * haciendo uso de los selectores que se habituan en css. Solo retorna
 * la primera coincidencia. Si no, retorna null
 */

const card = document.querySelector(".card");
console.log(card);

//retorna null
const noExiste = document.querySelector("no existe");
console.log(noExiste);

//selectores especificos como en css
const info = document.querySelector(".premium .info");
console.log(info);

const categoria = document.querySelector(".info:nth-child(2) .categoria.paseo");
console.log(categoria);

/**
 * querySelectorAll es muy similar a querySelctor, con la diferencia que
 * este retorna todas las coincidencias. Además de que retorna un NodeList y en caso
 * de que no haya alguna coincidencia, retona un NodeList vacio
 */

const coincidencias = document.querySelectorAll(".info");
console.log(coincidencias);
