// constructores
function Seguro(marca, year, tipo) {
  this.marca = marca;
  this.year = year;
  this.tipo = tipo;
}

//Realiza la cotización con los datos
Seguro.prototype.cotizarSeguro = function () {
  /**
   * 1 = Americano  1.15
   * 2 =  Asiatico 1.05
   * 3 = Europeo 1.35
   */

  let cantidad;
  const base = 2000;
  switch (this.marca) {
    case "1":
      cantidad = base * 1.15;
      break;
    case "2":
      cantidad = base * 1.05;
      break;
    case "3":
      cantidad = base * 1.35;
      break;
    default:
      break;
  }

  //leer el año
  const diferencia = new Date().getFullYear() - this.year;
  // Cada año que la diferencia es mayor, el costo va a reducirse un 3%
  cantidad -= ((diferencia * 3) * cantidad) / 100;

  /**
   * Si el seguro es básico, se multiplica por un 30% más
   * si es completo, se multiplica por un 50% más
   */

  cantidad *= this.tipo === "basico" ? 1.3 : 1.5;

  return cantidad;
};

function UI() {}

//llena el select de años
UI.prototype.llenarOpciones = () => {
  const max = new Date().getFullYear(),
    min = max - 15;

  const selectYear = document.querySelector("#year");

  for (let i = max; i > min; i--) {
    let option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    selectYear.appendChild(option);
  }
};

//crea un modal con mensaje de exito u error
UI.prototype.mostrarMensaje = (mensaje, tipo) => {
  const alert = document.createElement("p");
  alert.classList.add("mensaje", tipo, "mt-10");
  alert.textContent = mensaje;

  const formulario = document.querySelector("#cotizar-seguro");
  formulario.insertBefore(alert, document.querySelector("#resultado"));

  setTimeout(() => {
    alert.remove();
  }, 2000);
};

UI.prototype.mostrarResultado = (seguro, total) => {
  const div = document.createElement("div");
  const {marca, year, tipo} = seguro; 

  const marcas = ['Americano', 'Asiatico', 'Europeo']; 
  div.classList.add("mt-10");

  div.innerHTML = `
    <p class="header">Tu Resumen</p>
    <p class="font-bold">Marca: <span class="font-normal">${marcas[parseInt(marca) - 1]}</span></p>
    <p class="font-bold">Año: <span class="font-normal">${year}</span></p>
    <p class="font-bold">Tipo: <span class="font-normal capitalize">${tipo}</span></p>
    <p class="font-bold">Total: <span class="font-normal">$${total}</span></p>
  `;

  //Mostrar el spinner
  const spinner = document.querySelector("#cargando");
  spinner.classList.remove('hidden'); 

  setTimeout(() => {
    spinner.classList.add('hidden');
    document.querySelector("#resultado").appendChild(div);
  }, 2000);
};

UI.prototype.removerCotizaciones = () => {
    const resultado = document.querySelector('#resultado'); 

    if(resultado.firstChild){
        resultado.removeChild(resultado.firstChild); 
    }
}

//Instanciar UI

const ui = new UI();

document.addEventListener("DOMContentLoaded", () => {
  ui.llenarOpciones();
  addEventListeners();
});

function addEventListeners() {
  const formulario = document.querySelector("#cotizar-seguro");

  formulario.addEventListener("submit", cotizarSeguro);
}

function cotizarSeguro(e) {
  e.preventDefault();

  const marca = document.querySelector("#marca").value;
  const year = document.querySelector("#year").value;
  const tipo = document.querySelector("input[name='tipo']:checked").value;

  try {
    if (!marca || !year || !tipo) {
      throw new Error("Todos los campos son obligatorios");
    }
    ui.mostrarMensaje("Cotizando...", "correcto");

    const seguro = new Seguro(marca, year, tipo);
    const total = seguro.cotizarSeguro();

    ui.removerCotizaciones(); 

    ui.mostrarResultado(seguro, total.toFixed(2));
  } catch (error) {
    ui.mostrarMensaje(error.message, "error");
  }
}
