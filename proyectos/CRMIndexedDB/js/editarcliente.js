import {
  conectarDb,
  obtenerClientePorId,
  actualizarDatosCliente,
} from "./Database.js";
import imprimirAlerta from "./alerta.js";
import validarDatosCliente from "./validador.js";

const formulario = document.querySelector("#formulario");
let idCliente;

document.addEventListener("DOMContentLoaded", () => {
  const queryParams = new URLSearchParams(window.location.search);
  idCliente = queryParams.get("id");

  conectarDb(() => {
    obtenerClientePorId(idCliente, mostrarDatosCliente);
  });

  formulario.addEventListener("submit", actualizarCliente);
});

function mostrarDatosCliente({ nombre, email, telefono, empresa }) {
  const {
    nombre: inputNombre,
    email: inputEmail,
    telefono: inputTelefono,
    empresa: inputEmpresa,
  } = formulario;

  inputNombre.value = nombre;
  inputEmail.value = email;
  inputTelefono.value = telefono;
  inputEmpresa.value = empresa;
}

function actualizarCliente(e) {
  e.preventDefault();
  const { nombre, email, telefono, empresa } = e.target;

  const Cliente = {
    id: Number(idCliente),
    nombre: nombre.value,
    email: email.value,
    telefono: telefono.value,
    empresa: empresa.value,
  };

  if (validarDatosCliente(Cliente)) {
    imprimirAlerta(formulario, "Todos los campos son obligatorios", "error");
    return;
  }

  actualizarDatosCliente(Cliente, () => {
    imprimirAlerta(formulario, "¡Actualización exitosa!");
    setTimeout(() => {
      window.location.href = "index.html";
    }, 3000);
  });
}
