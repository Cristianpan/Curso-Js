const url = 'https://picsum.photos/list'; 

document.addEventListener('DOMContentLoaded', obtenerDatos); 

async function obtenerDatos() {
    try {
        const response = await fetch(url); 
        const result = await response.json(); 
        console.log(result); 
    } catch (error) {
        console.log(error); 
    }
}