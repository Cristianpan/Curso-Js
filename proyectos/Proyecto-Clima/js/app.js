const container = document.querySelector(".container");
const resultado = document.querySelector("#resultado");
const formulario = document.querySelector("#formulario");
const mensaje = document.querySelector("#mensaje");

window.addEventListener("load", () => {
  formulario.addEventListener("submit", buscarClima);
});

function buscarClima(e) {
  e.preventDefault();

  const {
    ciudad: { value: ciudad },
    pais: { value: pais },
  } = formulario;

  if (validarDatos(ciudad, pais)) {
    mostrarError("Ambos campos son obligatorios");
    return;
  }      
  limpiarResultado();
  crearSpinner(); 
  consultarAPI(ciudad, pais);
}

function consultarAPI(ciudad, pais) {
    const appId = "d8ab438a85bfcadcd980132dcd376722";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
    fetch(url)
    .then((response) => response.json())
    .then((result) => {
        removerSpinner(); 
      if (result.cod === "404") {
        mostrarError("Ciudad no encontrada");
        return;
      }

      mostrarClima(result);
    });
}

function validarDatos(ciudad, pais) {
  return !ciudad || !pais;
}

function mostrarError(mensaje) {
  let alerta = document.querySelector(".alerta");
  if (!alerta) {
    alerta = document.createElement("div");
    alerta.classList.add(
      "alerta",
      "bg-red-100",
      "border-red-400",
      "text-red-700",
      "px-4",
      "py-3",
      "rounded",
      "max-w-md",
      "mx-auto",
      "mt-6",
      "text-center"
    );

    alerta.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span>${mensaje}</span>
          `;

    container.appendChild(alerta);

    setTimeout(() => {
      alerta.remove();
    }, 3000);
  }
}

function mostrarClima(datos) {
  mensaje.classList.add("hidden"); 
  const {
    name,
    main: { temp, temp_max, temp_min },
  } = datos;

  const centigrados = kelvinACentigrados(temp);
  const max = kelvinACentigrados(temp_max);
  const min = kelvinACentigrados(temp_min);

  const resultadoDiv = document.createElement("div");
  resultadoDiv.classList.add("resultado-clima", "text-center", "text-white");
  resultadoDiv.innerHTML = `
        <p class="font-bold text-2xl">Clima en ${name}</p>
        <p class="font-bold text-6xl">${centigrados} &#8451</p>
        <p class="text-xl">Max: ${max} &#8451</p>
        <p class="text-xl">Min: ${min} &#8451</p>
    `;

  resultado.appendChild(resultadoDiv);
}

function kelvinACentigrados(grados) {
  return parseInt(grados - 273.15);
}

function limpiarResultado() {
  document.querySelector(".resultado-clima")?.remove();
  mensaje.classList.remove("hidden");
}

function crearSpinner() {
  const divSpinner = document.createElement("div");
  divSpinner.classList.add("sk-fading-circle");

  divSpinner.innerHTML = `   
    <div class="sk-circle1 sk-circle"></div>
    <div class="sk-circle2 sk-circle"></div>
    <div class="sk-circle3 sk-circle"></div>
    <div class="sk-circle4 sk-circle"></div>
    <div class="sk-circle5 sk-circle"></div>
    <div class="sk-circle6 sk-circle"></div>
    <div class="sk-circle7 sk-circle"></div>
    <div class="sk-circle8 sk-circle"></div>
    <div class="sk-circle9 sk-circle"></div>
    <div class="sk-circle10 sk-circle"></div>
    <div class="sk-circle11 sk-circle"></div>
    <div class="sk-circle12 sk-circle"></div>
  `;

  resultado.appendChild(divSpinner); 
}

function removerSpinner() {
    document.querySelector('.sk-fading-circle')?.remove();
}
