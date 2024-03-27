//Module pattern

const mostrarCliente = (nombre) => {
  console.log(nombre);
};

const modulo1 = function () {
  const nombre = "Cristian";
  function saludo() {
    console.log("Hola mundo");
  }

  return {
    nombre,
    saludo,
  };
};

export default mostrarCliente;
