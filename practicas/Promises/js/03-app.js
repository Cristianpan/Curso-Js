const aplicarDescuento = new Promise((resolve, reject) => {
  const descuento = false;

  if (descuento) {
    resolve("Descuento aplicado");
  } else {
    reject("No se puedo aplicar el descuento");
  }
});

aplicarDescuento
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((reason) => {
    console.log(reason);
  });

/**
 * Hay 3 valores
 * fulfiled - El promise se cumplió
 * rejected - El promise no se cumplió
 * pending - No se ha complido y tampoco fue rechazado
 */
