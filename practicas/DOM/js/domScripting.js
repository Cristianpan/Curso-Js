const enlace = document.createElement("a");

//texto
enlace.textContent = "Youtube";

//href
enlace.href = "https://www.youtube.com";
enlace.target = "_blank";

//seleccionar navegacion

const navegacion = document.querySelector('.navegacion'); 

//insertar al final 
navegacion.appendChild(enlace);

//insertar antes de un elemento
navegacion.insertBefore(enlace, navegacion.children[2]);


//Crear un CARD 

const parrafo1 = document.createElement('P'); 
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria,concierto');

const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Rock'; 
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('P'); 
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio'); 


// crear div con la clase de info
const info = document.createElement('div'); 

info.classList.add('info');

info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//crear imagen
const imagen = document.createElement('img'); 
imagen.src = 'img/hacer2.jpg';

//crear card 
const card = document.createElement('div'); 
card.classList.add('card');

card.appendChild(imagen); 
card.appendChild(info);

document.querySelector('.contenedor-cards').appendChild(card);