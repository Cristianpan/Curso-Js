import { cargarEdicion, eliminarCita } from "../funciones.js";
import {
  propietarioInput,
  mascotaInput,
  telefonoInput,
  fechaInput,
  horaInput,
  sintomasInput,
  contenedorCitas
} from "../selectores.js";

export default class UI {
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
