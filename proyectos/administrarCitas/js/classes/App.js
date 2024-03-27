import {
  propietarioInput,
  mascotaInput,
  telefonoInput,
  fechaInput,
  horaInput,
  sintomasInput,
  formulario
} from "../selectores.js";
import { obtenerDatosIniciales, datosCita, nuevaCita } from "../funciones.js";

export default class App {
  constructor() {
    this.initApp();
  }

  initApp() {
    mascotaInput.addEventListener("input", datosCita);
    propietarioInput.addEventListener("input", datosCita);
    telefonoInput.addEventListener("input", datosCita);
    horaInput.addEventListener("input", datosCita);
    fechaInput.addEventListener("input", datosCita);
    sintomasInput.addEventListener("input", datosCita);

    formulario.addEventListener("submit", nuevaCita);

    obtenerDatosIniciales();
  }
}
