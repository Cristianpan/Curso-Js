const cargarJSONBtn = document.querySelector("#cargarJSON");
cargarJSONBtn.addEventListener("click", obtenerDatos);

function obtenerDatos() {
  const url = "data/empleado.json";

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => mostrarResultado(result))
    .catch((error) => {
      console.log(error);
    });
}

function mostrarResultado({id, empresa, nombre, trabajo}){
    const contenido = document.querySelector('.contenido'); 

    contenido.innerHTML += `
        <p>ID: ${id}</p>
        <p>Empleado: ${nombre}</p>
        <p>Empresa: ${empresa}</p>
        <p>Trabajo: ${trabajo}</p>
    `; 
}
