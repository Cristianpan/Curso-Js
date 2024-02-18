import { conectarDb, obtenerClientes, eliminarRegistroCliente } from "./Database.js";
const listadoClientes = document.querySelector("#listado-clientes");


document.addEventListener("DOMContentLoaded", () => {
  conectarDb(() => obtenerClientes(mostrarClientes));
  listadoClientes.addEventListener('click', eliminarCliente); 
});

function eliminarCliente(e) {
    if (e.target.classList.contains('eliminar')){
        e.preventDefault(); 
        const confirmar = confirm('¿Estar seguro de que deseas eliminar este cliente?'); 
        
        if (confirmar){
            const idCliente = e.target.dataset.cliente; 
            eliminarRegistroCliente(idCliente, () => {
                alert('El cliente ha sido eliminado'); 
                e.target.parentElement.parentElement.remove();  
            })
        }
    }
}

function mostrarClientes(clientes) {
  let contenidoListado = "";
  clientes.forEach(({ nombre, empresa, email, telefono, id }) => {
    contenidoListado += ` 
    <tr id="${id}">
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
            <p class="text-sm leading-10 text-gray-700"> ${email} </p>
        </td>
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
            <p class="text-gray-700">${telefono}</p>
        </td>
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
            <p class="text-gray-600">${empresa}</p>
        </td>
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
            <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
            <a href="#" data-cliente="${id}" class="eliminar text-red-600 hover:text-red-900">Eliminar</a>
        </td>
    </tr>
`;
  });

  listadoClientes.innerHTML = contenidoListado; 
}


