import { showAlert, hasEmptyField } from "./funciones.js";
import { createClient } from "./API.js";

const form = document.querySelector("#formulario");
form.addEventListener("submit", validateClient);

function validateClient(e) {
  e.preventDefault();

  const {
    name: { value: name },
    phone: { value: phone },
    email: { value: email },
    company: { value: company },
  } = form;

  const client = {
    name,
    phone,
    email,
    company,
  };

  if (hasEmptyField(client)) {
    showAlert("Todos los campos son obligatorios", form);
    return;
  }

  createClient(client);
}
