function descargarClientes() {
    return new Promise((resolve, reject)=> {
        const error = false; 

        setTimeout(() => {
            if (!error){
                resolve('El Listado de Clientes se descargo correctamente'); 
            } else {
                reject('Error en la conexión'); 
            }
        }, 3000);
    })
}

const ejecutar = async () => {
    try {
      const result = await descargarClientes(); 
      console.log(result); 
    } catch (error) {
        console.log(error); 
    }
}

ejecutar(); 