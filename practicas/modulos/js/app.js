import { nombreCliente, ahorro as ahorroCliente, mostrarInformación,Cliente } from "./cliente.js";
import Empresa from "./empresa.js";

console.log(nombreCliente); 
console.log(ahorroCliente);

console.log(mostrarInformación('Cristian Pan', 3000)); 


const cliente = new Cliente('Cristian Pan', 200); 
console.log(cliente.mostrarInformación()); 

const empresa = new Empresa('DevInnovations', 30000, 'Tecnlogía'); 
console.log(empresa.mostrarInformación()); 