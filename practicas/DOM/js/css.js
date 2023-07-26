const encabezado = document.querySelector('h1'); 

console.log(encabezado);
//cambiar estilos de css
encabezado.style.color = 'Red';
encabezado.style.backgroundColor = 'white';


//agregar o eliminar clases
console.log(encabezado.classList); 
encabezado.classList.add('nueva-clase', 'titulo');
console.log(encabezado.classList); 

encabezado.classList.remove('titulo');
console.log(encabezado.classList);