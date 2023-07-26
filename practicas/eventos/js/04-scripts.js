//Event bubbling

const cardDiv = document.querySelector(".card");
const infoDiv = document.querySelector(".info");
const titulo = document.querySelector(".titulo");

/* cardDiv.addEventListener('click', (e)=> {
    e.stopPropagation();//detiene la propagación de eventos 
    console.log('click en card');
})
infoDiv.addEventListener('click', ()=> {
    e.stopPropagation();//detiene la propagación de eventos 
    console.log('click en info');
})
titulo.addEventListener('click', ()=> {
    e.stopPropagation();//d etiene la propagación de eventos 
    console.log('click en titulo');
}) */

//delegation
cardDiv.addEventListener("click", (e) => {
  const { target } = e;
  if (target.classList.contains("titulo")) {
    console.log("Diste click en titulo");
  } else if (target.classList.contains("precio")) {
    console.log("Diste click en precio");
  } else if (target.classList.contains("card")){
    console.log("Diste click en card");
  }
});
