const cargarTextBtn = document.querySelector("#cargarTxt");
cargarTextBtn.addEventListener("click", obtenerDatos);

function obtenerDatos() {
  const url = "data/datos.txt";
  fetch(url)
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
