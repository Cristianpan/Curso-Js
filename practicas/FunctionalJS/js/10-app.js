const obtenerNombre = (info) => ({
  mostrarNombre() {
    console.log(`Nombre: ${info.nombre}`);
  },
});

const guardarEmail = (info) => ({
  agregarEmail(email) {
    info.email = email;
  },
});

const obtenerEmail = (info) => ({
  mostrarEmail() {
    console.log(`Correo: ${info.email}`);
  },
});

function Cliente(nombre, email, empresa) {
  let info = {
    nombre,
    email,
    empresa,
  };

  return Object.assign(
    info,
    obtenerNombre(info),
    guardarEmail(info),
    obtenerEmail(info)
  );
}

function Empleado(nombre, email, empleado) {
  let info = {
    nombre,
    email,
    empleado,
  };

  return Object.assign(
    info,
    obtenerNombre(info),
    guardarEmail(info),
    obtenerEmail(info)
  );
}

const cliente = Cliente("Cristian", null, "DevCode");
cliente.mostrarNombre();
cliente.agregarEmail("cliente@correo.com");
cliente.mostrarEmail();

const empleado = Empleado("Juan", null, "Obrero");
empleado.agregarEmail("empleado@correo.com");
empleado.mostrarNombre();
empleado.mostrarEmail();
