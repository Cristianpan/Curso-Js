/* const cargarJSONArrayBtn = document.querySelector("#cargarJSONArray");
cargarJSONArrayBtn.addEventListener("click", obtenerDatos);
 */

document.addEventListener('DOMContentLoaded', obtenerDatos);
function obtenerDatos() {
  const url = "data/empleados.json";
  fetch(url)
    .then((response) => response.json())
    .then((result) => mostrarHTML(result))
    .catch((error) => console.log(error));
}

function mostrarHTML(empleados) {
  const contenido = document.querySelector(".contenido");

  let html = "";
  empleados.forEach(({ id, nombre, empresa, trabajo }) => {
    html += `
        <p>Empleado: ${nombre}</p>
        <p>ID: ${id}</p>
        <p>Empresa: ${empresa}</p>
        <p>Trabajo: ${trabajo}</p>
    `;
  });

  contenido.innerHTML += html;
}
