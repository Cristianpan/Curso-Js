import { getClients, deleteClient } from "./API.js";

const list = document.querySelector("#listado-clientes");

list.addEventListener('click', confirmDelete)

document.addEventListener("DOMContentLoaded", showClients);

async function showClients(e) {
  const clientes = await getClients();
  const fragment = document.createDocumentFragment();
  clientes.forEach((client) => {
    const { name, email, phone, company, id } = client;

    const row = document.createElement("tr");
    row.innerHTML += `
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${name} </p>
            <p class="text-sm leading-10 text-gray-700"> ${email} </p>
        </td>
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
            <p class="text-gray-700">${phone}</p>
        </td>
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
            <p class="text-gray-600">${company}</p>
        </td>
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
            <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
            <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
        </td>
    `;

    fragment.appendChild(row);
  });

  list.appendChild(fragment);
}


function confirmDelete(e) {
    const {target: element} = e; 
    if (element.classList.contains('eliminar')){
        debugger;
        const clientId = element.dataset.cliente; 
        const result = confirm('¿Está seguro que desea eliminar el registro del cliente?'); 
        
        if (result){
            deleteClient(clientId); 
        }
    
    }
}