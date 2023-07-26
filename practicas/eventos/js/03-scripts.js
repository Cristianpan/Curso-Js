const busqueda = document.querySelector(".busqueda");

/**
 * Eventos de inputs
 *
 * keydown - al presionar una tecla
 * keyup - al soltar una tecla tras presionarla
 * cut - al cortar un texto de un input
 * copy - al copiar un texto
 * blur - quitar el focus de un elemento
 * input - escucha por keydown, keyup y cut
 */

busqueda.addEventListener("input", (e) => {
  console.log(e.target.value);
});

//Eventos de formulario

const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault(); //previene la accion por defecto del elemento
  console.log("buscando...");
  console.log(e);
});

//eventos de scroll

window.addEventListener("scroll", () => {
    const premium = document.querySelector('.premium'); 
    const ubicacion = premium.getBoundingClientRect();

    if (ubicacion.top < 784 && ubicacion.top > -464 ){
        console.log('El elemento ya está visible');   
    } else {
        console.log('El elemento aún no está visible')
    }
});
