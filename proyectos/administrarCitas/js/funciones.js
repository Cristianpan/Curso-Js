import Citas from "./classes/Citas.js";
import UI from "./classes/UI.js";
import { formulario } from "./selectores.js";

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

const ui = new UI();
let administradorCitas = new Citas();

//agrega datos al objeto de cita
export function datosCita(e) {
  citaObj[e.target.name] = e.target.value;
}

//obtiene los datos del localStorage
export function obtenerDatosIniciales() {
  const citasStorage = localStorage.getItem("citas");

  if (citasStorage) {
    const citas = JSON.parse(citasStorage);
    administradorCitas.agregarCitas(citas);
    ui.mostrarCitas(administradorCitas);
  }
}


// valida y agrega una nueva cita a la clase de citas;

export function nuevaCita(e) {
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
      administradorCitas.modificarCita({ ...citaObj });
      mensaje = "Cita editada correctamente";
      edicion = false;
      formulario.querySelector('button[type="submit"]').textContent =
        "Crear Cita";
    } else {
      administradorCitas.agregarCita({ ...citaObj });
      mensaje = "Cita registrada correctamente";
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

export function resetearObjeto() {
  citaObj.id = "";
  citaObj.mascota = "";
  citaObj.propietario = "";
  citaObj.telefono = "";
  citaObj.fecha = "";
  citaObj.hora = "";
  citaObj.sintomas = "";
}

export function eliminarCita(id) {
  administradorCitas.eliminarCita(id);
  sincronizarStorage();
  ui.mostrarCitas(administradorCitas);
  ui.imprimirAlerta("La cita se eliminó correctamente");
}
//carga los datos de la cita en el formulario
export function cargarEdicion(cita) {
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
  formulario.querySelector('button[type="submit"]').textContent =
    "Guardar Cambios";
}

export function sincronizarStorage() {
  localStorage.setItem("citas", JSON.stringify(administradorCitas.citas));
}
