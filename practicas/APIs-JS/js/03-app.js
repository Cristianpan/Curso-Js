window.addEventListener('online', actualizarEstado); 
window.addEventListener('offline', actualizarEstado); 

function actualizarEstado(){
    if (navigator.onLine){
        console.log("La conexión ha sido establecida"); 
    } else {
        console.log("Se ha perdido la conexión..."); 
    }
}