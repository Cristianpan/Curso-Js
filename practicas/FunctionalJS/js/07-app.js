/* const obtenerCliente = () => {
    return () => console.log('Juan Pablo'); 
}

 */

const obtenerCliente = ()=> ()=> console.log('Cristian Pan'); 

const fn = obtenerCliente(); 
fn(); 