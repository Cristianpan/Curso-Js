export default class Citas {
  constructor() {
    this.citas = [];
  }

  agregarCitas(citas) {
    this.citas = [...this.citas, ...citas];
  }

  agregarCita(cita) {
    this.citas = [...this.citas, cita];

    console.log(this.citas);
  }

  eliminarCita(id) {
    this.citas = this.citas.filter((cita) => cita.id !== id);
  }

  modificarCita(cita) {
    this.citas = this.citas.map((elemento) =>
      elemento.id === cita.id ? cita : elemento
    );
  }
}
