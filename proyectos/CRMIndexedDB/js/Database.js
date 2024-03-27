let database;
export function conectarDb(callback) {
  const request = window.indexedDB.open("clientes", 1);

  request.onerror = function () {
    alert("Oops! Ha ocurrido un error");
  };

  request.onsuccess = function () {
    database = request.result;
    if (callback){
        callback();
    }
  };

  request.onupgradeneeded = function (e) {
    database = e.target.result;
    const objectStore = database.createObjectStore("clientes", {
      keyPath: "id",
      autoIncrement: true,
    });

    objectStore.createIndex("id", "id", { unique: true });
    objectStore.createIndex("nombre", "nombre", { unique: false });
    objectStore.createIndex("email", "email", { unique: true });
    objectStore.createIndex("telefono", "telefono", { unique: false });
    objectStore.createIndex("empresa", "empresa", { unique: false });
  };
}

export function crearNuevoCliente(cliente, callback) {
  const transaction = database.transaction(["clientes"], "readwrite");
  transaction.objectStore("clientes").add(cliente);

  transaction.onerror = function (e) {
    console.log(e)
    alert("Oops! Ha ocurrido un error, por favor intente de nuevo");
  };

  transaction.oncomplete = function () {
    callback();
  };
}

export function actualizarDatosCliente(cliente, callback) {
    const transaction = database.transaction(["clientes"], "readwrite");
    transaction.objectStore("clientes").put(cliente);
    
    transaction.onerror = function (e) {
      alert("Oops! Ha ocurrido un error, por favor intente de nuevo");
    };
    
    transaction.oncomplete = function () {
      callback();
    };
}

export function obtenerClientes(callback) {
  const transaction = database.transaction(["clientes"], "readonly");
  const objectStore = transaction.objectStore("clientes");

  const result = objectStore.getAll();
  result.onsuccess = (e) => {
    callback(e.target.result);
  };
}
export function obtenerClientePorId(clienteId, callback) {
  const transaction = database.transaction(["clientes"], "readonly");
  const objectStore = transaction.objectStore("clientes");

  const result = objectStore.get(Number(clienteId));
  result.onsuccess = (e) => {
    callback(e.target.result)
  };
}

export function eliminarRegistroCliente(clienteId, callback) {
    const transaction = database.transaction(["clientes"], "readwrite");
    transaction.objectStore("clientes").delete(Number(clienteId));
    
    transaction.onerror = function () {
      alert("Oops! Ha ocurrido un error, por favor intente de nuevo");
    };
    
    transaction.oncomplete = function () {
      callback();
    };
}
