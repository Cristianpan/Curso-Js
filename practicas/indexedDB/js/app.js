let db; 

document.addEventListener("DOMContentLoaded", () => {
  crearDb();

  setTimeout(() => {
    crearCliente(); 
  }, 500); 
});

function crearDb() {
  let crmDB = window.indexedDB.open("crm", 1);

  crmDB.onerror = function () {
    console.log("Ha ocurrido un error al crear la db");
  };

  crmDB.onsuccess = function () {
    db = crmDB.result; 
  };

  //Configuración de la base de datos
  crmDB.onupgradeneeded = function (e) {
    const db = e.target.result;

    const objectStore = db.createObjectStore("crm", {
      keyPath: "crm",
      autoIncrement: true,
    });

    objectStore.createIndex("nombre", "nombre", { unique: false });
    objectStore.createIndex("email", "email", { unique: true });
    objectStore.createIndex("telefono", "telefono", { unique: false });
  };
}

function crearCliente(){
    let transaction = db.transaction(['crm', 'readwrite']); 
    transaction.oncomplete = function (){
        console.log('transacción completa'); 
    }

    transaction.onerror = function () {
        console.log("Hubo un error en la transacción"); 
    }

    const objectStore = transaction.objectStore['crm']; 

    const nuevoCliente = {
        telefono: 9931231123, 
        nombre: 'Pedro', 
        email: 'pedro@gmail.com'
    }

    const peticion = objectStore.add(nuevoCliente); 
}
