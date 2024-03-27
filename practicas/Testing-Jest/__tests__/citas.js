import Citas from "../js/classes/Citas.js";

describe("Probar la clase de Citas", () => {
  const citas = new Citas();
  const id = Date.now();

  test("Agregar una nueva cita", () => {
    const citaObj = {
      id,
      mascota: "Michi",
      propietario: "Pedro",
      telefono: "9993987865",
      fecha: "10-02-2024",
      hora: "11:50",
      sintomas: "Solo duerme",
    };
    const citaObj2 = {
      id: Date.now(), 
      mascota: "Sorry",
      propietario: "Pedro",
      telefono: "9993987865",
      fecha: "10-02-2024",
      hora: "11:50",
      sintomas: "Solo duerme",
    };

    citas.agregarCita(citaObj);
    citas.agregarCita(citaObj2);

    expect(citas).toMatchSnapshot();
  });

  test("Actualizar una nueva cita", () => {
    const citaObj = {
      id,
      mascota: "Nuevo nombre",
      propietario: "Pedro",
      telefono: "9993987865",
      fecha: "10-02-2024",
      hora: "11:50",
      sintomas: "Solo duerme",
    };

    citas.editarCita(citaObj);

    expect(citas).toMatchSnapshot();
  });

  test("Eliminar cita", ()=> {
    citas.eliminarCita(id); 

    expect(citas).toMatchSnapshot(); 
  }); 
});
