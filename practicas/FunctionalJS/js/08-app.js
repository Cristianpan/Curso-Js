const obtenerCliente = () => {
    const nombre = 'Cristian'; 
    function mostrarNombre() {
        console.log(nombre);
    }

    return mostrarNombre; 
}

const cliente = obtenerCliente(); 
cliente(); 