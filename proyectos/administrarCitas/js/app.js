//campos formulario
const mascotaInput = document.querySelector("#mascota");
const propietarioInput = document.querySelector("#propietario");
const telefonoInput = document.querySelector("#telefono");
const fechaInput = document.querySelector("#fecha");
const horaInput = document.querySelector("#hora");
const sintomasInput = document.querySelector("#sintomas");

//ui
const formulario = document.querySelector("#nueva-cita");
const contenedorCitas = document.querySelector("#citas");

//clases
class Citas {
  constructor() {
    this.citas = [];
  }

  agregarCitas(citas) {
    this.citas = [...this.citas, ...citas]; 
  }

  agregarCita(cita) {
    this.citas = [...this.citas, cita];

    console.log(this.citas);
  }

  eliminarCita(id) {
    this.citas = this.citas.filter((cita) => cita.id !== id);
  }

  modificarCita(cita) {
    this.citas = this.citas.map(elemento => elemento.id === cita.id ? cita: elemento);     
  }
}

class UI {
  imprimirAlerta(mensaje, tipo) {
    const auxAlert = document.querySelector(".alert");

    if (!auxAlert) {
      const alerta = document.createElement("div");
      alerta.classList.add("text-center", "alert", "col-12");

      alerta.classList.add(`alert-${tipo === "error" ? "danger" : "success"}`);
      alerta.textContent = mensaje;

      document.querySelector(".form legend").after(alerta);

      setTimeout(() => {
        alerta.remove();
      }, 2000);
    }
  }

  mostrarCitas({ citas }) {
    this.limpiarListadoCitas();

    citas.forEach((cita) => {
      const { id, mascota, propietario, telefono, fecha, hora, sintomas } =
        cita;

      const divCita = document.createElement("div");
      divCita.classList.add("cita");
      divCita.dataset.id = id;

      divCita.innerHTML = `
                <p class="cita__texto"> <span class="cita__texto--span">Nombre:</span> ${mascota}</p>
                <p class="cita__texto"> <span class="cita__texto--span">Propietario:</span> ${propietario}</p>
                <p class="cita__texto"> <span class="cita__texto--span">Teléfono:</span> ${telefono}</p>
                <p class="cita__texto"> <span class="cita__texto--span">Fecha:</span> ${fecha}</p>
                <p class="cita__texto"> <span class="cita__texto--span">Hora:</span> ${hora}</p>
                <p class="cita__texto"> <span class="cita__texto--span">Sintomas:</span> ${sintomas}</p>
            `;

      const divBotones = document.createElement("div");
      divBotones.classList.add("cita__botones");

      const btnEliminar = document.createElement("button");
      btnEliminar.classList.add("cita__boton", "cita__boton--eliminar");
      btnEliminar.type = "button";
      btnEliminar.innerHTML =
        '<img class="svg" src="img/trash.svg" alt="icono eliminar">';
      btnEliminar.onclick = () => eliminarCita(id);

      const btnEditar = document.createElement("button");
      btnEditar.classList.add("cita__boton", "cita__boton--editar");
      btnEditar.type = "button";
      btnEditar.innerHTML =
        '<img class="svg" src="img/edit.svg" alt="icono editar">';
      btnEditar.onclick = () => cargarEdicion(cita);

      divBotones.appendChild(btnEditar);
      divBotones.appendChild(btnEliminar);
      divCita.appendChild(divBotones);
      contenedorCitas.appendChild(divCita);
    });
  }

  limpiarListadoCitas() {
    while (contenedorCitas.firstChild) {
      contenedorCitas.removeChild(contenedorCitas.firstChild);
    }
  }

  llenarInputs(cita) {
    const { mascota, propietario, telefono, fecha, hora, sintomas } = cita;

    //Llenar los inputs
    mascotaInput.value = mascota;
    propietarioInput.value = propietario;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;
  }
}

const ui = new UI();
let administradorCitas = new Citas();

let edicion;
//objeto con la informacion de la cita
const citaObj = {
  id: "",
  mascota: "",
  propietario: "",
  telefono: "",
  fecha: "",
  hora: "",
  sintomas: "",
};

//registra eventos
eventListeners();
function eventListeners() {
  mascotaInput.addEventListener("input", datosCita);
  propietarioInput.addEventListener("input", datosCita);
  telefonoInput.addEventListener("input", datosCita);
  horaInput.addEventListener("input", datosCita);
  fechaInput.addEventListener("input", datosCita);
  sintomasInput.addEventListener("input", datosCita);

  formulario.addEventListener("submit", nuevaCita);

  obtenerDatosIniciales(); 
}

//obtiene los datos del localStorage
function obtenerDatosIniciales() {
    const citasStorage = localStorage.getItem('citas'); 

    if (citasStorage) {
        const citas = JSON.parse(citasStorage); 
        administradorCitas.agregarCitas(citas); 
        ui.mostrarCitas(administradorCitas); 
    }
}


//agrega datos al objeto de cita
function datosCita(e) {
  citaObj[e.target.name] = e.target.value;
}

// valida y agrega una nueva cita a la clase de citas;

function nuevaCita(e) {
  e.preventDefault();
  let mensaje; 

  if (!edicion) {
      citaObj.id = Date.now();
  }

  const values = Object.values(citaObj);

  try {
    if (values.some((value) => value === "")) {
      throw new Error("Todos los campos son obligatorios");
    }

    if (edicion) {
        administradorCitas.modificarCita({...citaObj}); 
        mensaje = 'Cita editada correctamente'; 
        edicion = false; 
        formulario.querySelector('button[type="submit"]').textContent = "Crear Cita";

    } else {
        administradorCitas.agregarCita({ ...citaObj });
        mensaje = 'Cita registrada correctamente'; 
    }

    sincronizarStorage(); 
    ui.mostrarCitas(administradorCitas);
    ui.imprimirAlerta(mensaje);
    
    resetearObjeto();
    formulario.reset();
  } catch (error) {
    ui.imprimirAlerta(error.message, "error");
  }
}

function resetearObjeto() {
  citaObj.id = "";
  citaObj.mascota = "";
  citaObj.propietario = "";
  citaObj.telefono = "";
  citaObj.fecha = "";
  citaObj.hora = "";
  citaObj.sintomas = "";
}

function eliminarCita(id) {
  administradorCitas.eliminarCita(id);
  sincronizarStorage(); 
  ui.mostrarCitas(administradorCitas);
  ui.imprimirAlerta("La cita se eliminó correctamente");
}
//carga los datos de la cita en el formulario
function cargarEdicion(cita) {
    const { id, mascota, propietario, telefono, fecha, hora, sintomas } = cita;
    ui.llenarInputs(cita);
    citaObj.id = id;
    citaObj.mascota = mascota;
    citaObj.propietario = propietario;
    citaObj.telefono = telefono;
    citaObj.fecha = fecha;
    citaObj.hora = hora;
    citaObj.sintomas = sintomas;
    
    edicion = true;
    
    //cambiar el texto del boton
    formulario.querySelector('button[type="submit"]').textContent = "Guardar Cambios";
}


function sincronizarStorage(){
    localStorage.setItem('citas', JSON.stringify(administradorCitas.citas)); 
}