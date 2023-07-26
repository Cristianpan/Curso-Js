const formulario = document.querySelector("#formulario");
const inputEmail = document.querySelector("#email");
const inputCC = document.querySelector("#cc");
const inputAsunto = document.querySelector("#asunto");
const inputMensaje = document.querySelector("#mensaje");
const btnSubmit = document.querySelector('#formulario button[type="submit"]');
const btnReset = document.querySelector('#formulario button[type="reset"]');

const mail = {
  email: "",
  cc: "",
  asunto: "",
  mensaje: "",
};

document.addEventListener("DOMContentLoaded", iniciarApp);

function iniciarApp() {
  inputEmail.addEventListener("blur", validar);
  inputAsunto.addEventListener("blur", validar);
  inputMensaje.addEventListener("blur", validar);
  inputCC.addEventListener("blur", validar);
  formulario.addEventListener("submit", enviarEmail);
  btnReset.addEventListener("click", (e) => {
    e.preventDefault;
    resetearFormulario();
  });
}

function validar({ target }) {
  const { value, id } = target;
  const alert = formulario.querySelector(`.error-${id}`);

  try {
    if (value.trim() === "") {
      if (id !== "cc") {
        throw new Error(`El campo ${id} es obligatorio`);
      } else {
        removerAlerta(id);
      }
    } else if ((id === "email" || id === "cc") && !isEmail(value)) {
      target.value = "";
      throw new Error(`El email debe de contener un formato valido`);
    } else {
      mail[id] = value.trim().toLowerCase();
      removerAlerta(id);
    }
  } catch (error) {
    mail[id] = "";
    mostrarAlerta(error.message, id);
  }

  comprobarEmail();
}

function enviarEmail(e) {
  e.preventDefault();
  document.querySelector(".spinner").classList.remove("hidden");

  console.log(mail);

  setTimeout(() => {
    document.querySelector(".spinner").classList.add("hidden");
    resetearFormulario();
    crearMensajeExito();
  }, 3000);
}

function comprobarEmail() {
  const { email, asunto, mensaje } = mail;

  if (email && asunto && mensaje) {
    if (btnSubmit.disabled) {
      btnSubmit.disabled = false;
      btnSubmit.classList.remove("opacity-50");
    }
  } else {
    if (!btnSubmit.disabled) {
      btnSubmit.classList.add("opacity-50");
      btnSubmit.disabled = true;
    }
  }
}

function isEmail(email) {
  const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  return regex.test(email);
}

function mostrarAlerta(mensaje, id) {
  const alert = formulario.querySelector(`.error-${id}`);

  if (!alert) {
    const referencia = formulario.querySelector(`label[for="${id}"]`);
    const error = document.createElement("P");

    error.textContent = mensaje;
    error.classList.add("text-red-600", `error-${id}`);

    referencia.after(error);
  }
}

function removerAlerta(id) {
  const alert = formulario.querySelector(`.error-${id}`);

  if (alert){
    alert.remove(); 
  }
}

function resetearFormulario() {
  mail.email = "";
  mail.cc = "";
  mail.asunto = "";
  mail.mensaje = "";
  comprobarEmail();
  eliminarAlertas();
  formulario.reset();
}

function eliminarAlertas() {
  const alertas = document.querySelectorAll('[class*="error"]');
  alertas.forEach((alerta) => {
    alerta.remove();
  });
}

function crearMensajeExito() {
  const alertaExito = document.createElement("p");
  alertaExito.classList.add(
    "bg-green-500",
    "text-white",
    "p-2",
    "text-center",
    "rounded-lg",
    "mt-10",
    "font-bold",
    "text-sm",
    "uppercase"
  );
  alertaExito.textContent = "Mensaje enviado correctamente";
  formulario.appendChild(alertaExito);

  setTimeout(() => {
    alertaExito.remove();
  }, 3000);
}
