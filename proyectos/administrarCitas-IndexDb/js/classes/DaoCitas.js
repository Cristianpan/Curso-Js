export default class DaoCitas {
  #db;
  #request;

  constructor(action = null) {
    this.#request = window.indexedDB.open("citas", 1);
    this.#request.onerror = function () {
      alert("Oops! Ha ocurrido un error");
    };

    this.#request.onsuccess = () => {
      this.#db = this.#request.result;
      if (action) {
        action();
      }
    };

    this.#request.onupgradeneeded = function (e) {
      const db = e.target.result;

      const objectStore = db.createObjectStore("citas", {
        keyPath: "id",
        autoIncrement: true,
      });

      objectStore.createIndex("id", "id", { unique: true });
      objectStore.createIndex("mascota", "mascota", { unique: false });
      objectStore.createIndex("propietario", "propietario", { unique: false });
      objectStore.createIndex("telefono", "telefono", { unique: false });
      objectStore.createIndex("fecha", "fecha", { unique: false });
      objectStore.createIndex("hora", "hora", { unique: false });
      objectStore.createIndex("sintomas", "sintomas", { unique: false });
    };
  }

  
  obtenerRegistros(callback) {
    const transaction = this.#db.transaction(["citas"], "readonly");
    const objectStore = transaction.objectStore("citas");

    const result = objectStore.getAll();
    result.onsuccess = (e) => {
      callback(e.target.result);
    };
  }

  agregarRegisto(cita, callback) {
    const transaction = this.#db.transaction(["citas"], "readwrite");
    const objectStore = transaction.objectStore("citas");
    objectStore.add(cita);

    transaction.oncomplete = () => {
      callback();
    }

    transaction.onerror = () => {
      throw new Exception(
        "Ha ocurrido un error al guardos los datos. Por favor intente nuevamente."
      );
    };
  }
  
  actualizarRegistro(cita, callback) {
    const transaction = this.#db.transaction(["citas"], "readwrite");
    transaction.objectStore("citas").put(cita);

    transaction.oncomplete = () => {
      callback(); 
    }

    transaction.onerror = () => {
      throw new Exception(
        "Ha ocurrido un error al guardos los datos. Por favor intente nuevamente."
      );
    };
  }

  eliminarCita(citaId, callback) {
    const transaction = this.#db.transaction(["citas"], "readwrite");
    transaction.objectStore("citas").delete(citaId);

    transaction.oncomplete = () => {
      callback();
    };

    transaction.onerror = () => {
      throw new Exception(
        "Ha ocurrido un error al eliminar el registro. Por favor intente nuevamente."
      );
    };
  }
}
