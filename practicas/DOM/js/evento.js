const btnFlotante = document.querySelector('.btn-flotante');

const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click', mostrarOcualtarFooter);

function mostrarOcualtarFooter(){
    btnFlotante.classList.toggle('activo'); 
    footer.classList.toggle('activo'); 
    btnFlotante.textContent = btnFlotante.classList.contains('activo') ? 'cerrar' : 'Idioma y Mondena'
}