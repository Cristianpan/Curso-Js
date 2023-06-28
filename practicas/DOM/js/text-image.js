const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);


//acceso al texto

console.log(encabezado.innerText); //toma en cuenta los estilos y no retorna el texto de elementos ocultos
console.log(encabezado.textContent); //solo toma en cuenta el texto
console.log(encabezado.innerHTML); //se trae el texto con todo y el html


//cambiar el texto

const heading =  document.querySelector('.contenido-hero h1');

heading.textContent = "Nuevo Heading";
console.log(heading);
heading.innerHTML = `Hola <b>Mundo!</b>`
console.log(heading);


//modificar imagenes

const imagen = document.querySelector('.card img'); 
imagen.src = 'img/hacer2.jpg'

