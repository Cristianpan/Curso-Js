const primerEnlace = document.querySelector('a');

//eliminar a si mismo
primerEnlace.remove(); 

//eliminar desde el padre
const nav = document.querySelector('nav');
nav.removeChild(nav.children[0]);

const hero = document.querySelector('.contenido-hero');
const formHero = document.querySelector('.contenido-hero .formulario'); 
hero.removeChild(formHero);
