const nav = document.querySelector('.navegacion');

/**
 * Eventos de mouse:
 * 
 * click - se aplica si ocurre un mousedown y mouseup simultaneamente
 * dblclick - doble click sobre el elemento
 * mousedown - se dispara al presionar sobre algun elemento
 * mouseup - se dispara después de presionar y soltar el elemento
 * mouseover - se activa más de una vez si se hace hover en el elemento y sus hijos
 * mouseenter - solo se activa una vez al entrar al elemento
 * mouseout - al salir del elemento o de sus desencientes (puede dispararse más de una vez)
 * mouseleave - al salir del elemento (se dispara una sola vez)
 * 
 * 
 */

nav.addEventListener('mouseout', ()=>{
    console.log('click en nav')
});



