import { getClientById, updateClient } from "./API.js";
import { hasEmptyField, showAlert } from "./funciones.js";

const form = document.querySelector("#formulario");
let id;

document.addEventListener("DOMContentLoaded", async () => {
  const url = new URLSearchParams(window.location.search);
  id = url.get("id");
  const client = await getClientById(id);
  setClientData(client);
  form.addEventListener("submit", updateClientData);
});

function setClientData(client) {
  const { name, phone, email, company } = form;

  name.value = client.name;
  phone.value = client.phone;
  email.value = client.email;
  company.value = client.company;
}

function updateClientData(e) {
  e.preventDefault();

  const {
    name: { value: name },
    phone: { value: phone },
    email: { value: email },
    company: { value: company },
  } = form;

  const client = {
    id,
    name,
    phone,
    email,
    company,
  };

  if (hasEmptyField(client)) {
    showAlert("Todos los campos son obligatorios", form);
    return;
  }

  updateClient(client);
}
