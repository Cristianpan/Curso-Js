function descargarNuevosClientes() {
  return new Promise((resolve) => {
      console.log("Descargando clientes...");
    setTimeout(() => {
      resolve("Los clientes fueron descargados");
    }, 3000);
  });
}

function descargarNuevosPedidos() {
  return new Promise((resolve) => {
    console.log("Descargando pedidos...");
    setTimeout(() => {
      resolve("Los pedidos fueron descargados");
    }, 5000);
  });
}

const app = async () => {
  try {
    /* 
            forma no recomendada cuando son consultas independientes
        const clientes = await descargarNuevosClientes(); 
        console.log(clientes); 

        const pedidos = await descargarNuevosPedidos(); 
        console.log(pedidos); 
    */

    const resultado = await Promise.all([
      descargarNuevosClientes(),
      descargarNuevosPedidos(),
    ]);
    console.log(resultado[0]);
    console.log(resultado[1]);
  } catch (error) {
    console.log(error);
  }
};

app(); 
