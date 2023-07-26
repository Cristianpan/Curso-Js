const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#lista-cursos");

let articulosCarrito = [];

document.addEventListener("DOMContentLoaded", iniciarApp);
function iniciarApp() {
  //inicializa el carrito con los datos del local storage
  inicializarCarrito();

  //agregar un nuevo curso
  listaCursos.addEventListener("click", agregarCurso);

  //eliminar un curso;
  carrito.addEventListener("click", eliminarCurso);

  //vaciar el carrito
  vaciarCarritoBtn.addEventListener("click", vaciarCarrito);
}

function inicializarCarrito() {
  const carritoStorage = localStorage.getItem("carrito")
  articulosCarrito = carritoStorage ? JSON.parse(carritoStorage) : [];

  articulosCarrito.forEach((curso) => {
    habilitarBotonAgregar(curso.id);
  });
  agregarArticuloHtml(); 
}

function agregarCurso(e) {
  if (e.target.classList.contains("agregar-carrito")) {
    const cursoSeleccionado = e.target.parentElement.parentElement;
    const curso = obtenerDatosCurso(cursoSeleccionado);

    if (!articulosCarrito.some((articulo) => articulo.id === curso.id)) {
      //agrega elementos al carrito si no ha sido agregado
      articulosCarrito = [...articulosCarrito, curso];
      habilitarBotonAgregar(curso.id);
      sincronizarLocalStorage();
      agregarArticuloHtml();
    }
  }
}

function eliminarCurso(e) {
  if (e.target.classList.contains("borrar-curso")) {
    const cursoId = e.target.getAttribute("data-id");

    articulosCarrito = articulosCarrito.filter((curso) => curso.id !== cursoId);

    habilitarBotonAgregar(cursoId);
    sincronizarLocalStorage();
    agregarArticuloHtml();
  }
}

function vaciarCarrito(e) {
  articulosCarrito.forEach((curso) => {
    habilitarBotonAgregar(curso.id);
  });
  articulosCarrito = [];
  sincronizarLocalStorage();
  limpiarCarritoHtml();
}

function habilitarBotonAgregar(cursoId) {
  const btnAgregar = listaCursos.querySelector(`[data-id='${cursoId}']`);

  btnAgregar.disabled = btnAgregar.disabled ? false : true;
}
function obtenerDatosCurso(curso) {
  //obtiene elementos al carrito;
  const infoCurso = {
    imagen: curso.querySelector(".imagen-curso").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector(".precio span").textContent,
    id: curso.querySelector("button").getAttribute("data-id"),
    cantidad: 1,
  };

  return infoCurso;
}

function agregarArticuloHtml() {
  //Limpiar el html
  limpiarCarritoHtml();

  //recorre el carrito y genera el html
  articulosCarrito.forEach((curso) => {
    const { imagen, titulo, precio, cantidad, id } = curso;

    const row = document.createElement("tr");
    row.innerHTML = `
            <td><img src="${imagen}" width="100"></td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <button type="button" class="borrar-curso" data-id="${id}"> X </button>
            </td>
        `;
    contenedorCarrito.appendChild(row);
  });
}

//elimina los cursos del tbody
function limpiarCarritoHtml() {
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}

function sincronizarLocalStorage() {
  localStorage.setItem("carrito", JSON.stringify(articulosCarrito));
}
