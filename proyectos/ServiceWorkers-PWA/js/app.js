if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./sw.js")
    .then((registrado) => console.log("Se instalo correctamente", registrado))
    .catch((error) => console.log("Algo ha ocurrido", error));
} else {
  console.log("No soporta serviceWorker el navegador");
}
