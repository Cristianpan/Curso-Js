import UI from "./classes/UI.js";
import DaoCitas from "./classes/DaoCitas.js";
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

let dataBase;
const ui = new UI();

export function inicializarDb(callback) {
  dataBase = new DaoCitas(callback);
}

//agrega datos al objeto de cita
export function datosCita(e) {
  citaObj[e.target.name] = e.target.value;
}

//obtiene los datos del localStorage
export function obtenerDatos() {
  dataBase.obtenerRegistros((citas) => ui.mostrarCitas(citas));
}

// valida y agrega una nueva cita a la clase de citas;

export function nuevaCita(e) {
  e.preventDefault();
  if (!edicion) {
    citaObj.id = Date.now();
  }

  const values = Object.values(citaObj);

  try {
    if (values.some((value) => value === "")) {
      throw new Error("Todos los campos son obligatorios");
    }

    if (edicion) {
      dataBase.actualizarRegistro(citaObj, () => {
        ui.actualizarCita(citaObj);
        edicion = false;
        formulario.querySelector('button[type="submit"]').textContent =
          "Crear Cita";
        ui.imprimirAlerta("Cita editada correctamente");
        resetear();
      });
    } else {
      dataBase.agregarRegisto(citaObj, () => {
        ui.crearCita(citaObj);
        ui.imprimirAlerta("Cita creada correctamente");
        resetear();
      });
    }
  } catch (error) {
    ui.imprimirAlerta(error.message, "error");
  }
}

function resetear() {
  resetearObjeto();
  formulario.reset();
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

export function eliminarCita(citaId) {
  try {
    dataBase.eliminarCita(citaId, () => {
      obtenerDatos();
      ui.eliminarCita(citaId);
      ui.imprimirAlerta("La cita se eliminó correctamente");
    });
  } catch (error) {
    ui.imprimirAlerta(error.menssage);
  }
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
  formulario.querySelector('button[type="submit"]').textContent =
    "Guardar Cambios";
}
