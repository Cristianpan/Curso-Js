import { conectarDb, crearNuevoCliente } from "./Database.js";
import imprimirAlerta from "./alerta.js";
import validarDatosCliente from "./validador.js";

const formulario = document.querySelector("#formulario");

document.addEventListener("DOMContentLoaded", () => {
  conectarDb();
  formulario.addEventListener("submit", registrarCliente);
});

function registrarCliente(e) {
  e.preventDefault();
  const { nombre, email, telefono, empresa } = e.target;

  const Cliente = {
    id: Date.now(),
    nombre: nombre.value,
    email: email.value,
    telefono: telefono.value,
    empresa: empresa.value,
  };

  if (validarDatosCliente(Cliente)) {
    imprimirAlerta(formulario, "Todos los campos son obligatorios", "error");
    return;
  }
  
  crearNuevoCliente(Cliente, () => {
    imprimirAlerta("¡Registro Exitoso!");
    setTimeout(() => {
        window.location.href = "index.html";
    })
  });
}
