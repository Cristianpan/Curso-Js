const paises = ["Francia", "Argentina", "Mexico"];

function nuevoPais(pais, callback) {
  setTimeout(() => {
    pais.push();
    callback();
  }, 2000);
}

function mostrarPaises() {
  setTimeout(() => {
    paises.forEach((pais) => {
      console.log(pais);
    });
  }, 1000);
}

mostrarPaises();

nuevoPais("Cuba", mostrarPaises);
