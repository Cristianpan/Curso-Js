function descargarClientes() {
    return new Promise((resolve, reject)=> {
        const error = true; 

        setTimeout(() => {
            if (!error){
                resolve('El Listado de Clientes se descargo correctamente'); 
            } else {
                reject('Error en la conexión'); 
            }
        }, 3000);
    })
}

async function ejecutar() {
    try {
      const result = await descargarClientes(); 
      console.log(result); 
    } catch (error) {
        console.log(error); 
    }
}

ejecutar(); 