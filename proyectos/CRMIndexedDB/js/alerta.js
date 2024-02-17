export default function imprimirAlerta(contenedor, mensaje, tipo) {
    const alerta = document.querySelector(".alerta");
  
    if (!alerta) {
      const divMensaje = document.createElement("div");
      const color = tipo === "error" ? "red" : "green";
      divMensaje.classList.add(
        "alerta",
        "px-4",
        "py-3",
        "rounded",
        "max-w-lg",
        "mx-auto",
        "mt-6",
        "text-center",
        "border",
        `bg-${color}-100`,
        `border-${color}-400`,
        `text-${color}-700`
      );
  
      divMensaje.textContent = mensaje;
  
      formulario.appendChild(divMensaje);
  
      setTimeout(() => {
        divMensaje.remove();
      }, 3000);
    }
  }
  