//variables
const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");

//contenedor para los resultados
const resultado = document.querySelector("#resultado");

//objeto de busqueda
const datosBusqueda = {
  marca: "",
  year: "",
  puertas: "",
  transmision: "",
  color: "",
  minimo: "",
  maximo: "",
};

document.addEventListener("DOMContentLoaded", () => {
  agregarEventListener();
  mostrarAutos();
  llenarSelectAnios();
});

function agregarEventListener() {
  marca.addEventListener("change", actualizarObjeto);
  year.addEventListener("change", actualizarObjeto);
  minimo.addEventListener("change", actualizarObjeto);
  maximo.addEventListener("change", actualizarObjeto);
  puertas.addEventListener("change", actualizarObjeto);
  transmision.addEventListener("change", actualizarObjeto);
  color.addEventListener("change", actualizarObjeto);
}

function actualizarObjeto({ target }) {
  const { value, id } = target;
  datosBusqueda[id] = value;
  filtrarAuto();
}

//funcion que filtra en base a la busqueda
function filtrarAuto() {
  const resultado = autos
    .filter(filtrarMarca)
    .filter(filtrarYear)
    .filter(filtrarMinimo)
    .filter(filtrarMaximo)
    .filter(filtrarPuertas)
    .filter(filtrarTransmision)
    .filter(filtrarColor);
  limpiarListadoResultado();

  if (resultado.length) {
    mostrarAutos(resultado);
  } else {
    mostrarAlerta(); 
  }
}

function filtrarMarca(auto) {
  const { marca } = datosBusqueda;
  if (marca) {
    return auto.marca === marca;
  }

  return auto;
}

function filtrarYear(auto) {
  const { year } = datosBusqueda;
  if (year) {
    return auto.year === parseInt(year);
  }

  return auto;
}

function filtrarMinimo(auto) {
  const { minimo } = datosBusqueda;
  if (minimo) {
    return auto.precio >= parseInt(minimo);
  }

  return auto;
}

function filtrarMaximo(auto) {
  const { maximo } = datosBusqueda;
  if (maximo) {
    return auto.precio <= parseInt(maximo);
  }

  return auto;
}

function filtrarPuertas(auto) {
  const { puertas } = datosBusqueda;
  if (puertas) {
    return auto.puertas === parseInt(puertas);
  }

  return auto;
}

function filtrarColor(auto) {
  const { color } = datosBusqueda;
  if (color) {
    return auto.color === color;
  }

  return auto;
}

function filtrarTransmision(auto) {
  const { transmision } = datosBusqueda;
  if (transmision) {
    return auto.transmision === transmision;
  }

  return auto;
}

function mostrarAutos(arrayAutos = autos) {
  const fragment = document.createDocumentFragment();

  arrayAutos.forEach((auto) => {
    const { marca, modelo, year, puertas, transmision, precio, color } = auto;

    const autoHtml = document.createElement("p");
    autoHtml.textContent = `
            ${marca} - ${modelo} - ${year} - ${puertas} - ${transmision} - $${precio} - ${color} 
        `;

    fragment.appendChild(autoHtml);
  });

  resultado.appendChild(fragment);
}

function limpiarListadoResultado() {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
}

function llenarSelectAnios() {
  const maxYear = new Date().getFullYear();
  const minYear = maxYear - 10;

  for (let i = maxYear; i >= minYear; i--) {
    const opcion = document.createElement("option");
    opcion.value = i;
    opcion.textContent = i;
    year.appendChild(opcion);
  }
}

function mostrarAlerta(){
  const alerta = document.createElement('p'); 
  alerta.textContent = "No hay resultados de tu busqueda"; 
  
  resultado.appendChild(alerta); 
}
