// new binging
function Auto(modelo, color) {
    this.modelo = modelo; 
    this.color = color; 
}


const auto = new Auto('Camaro', 'Negro'); 
console.log(auto);

// Window binging 
window.color = 'negro'; 
function hola(){
    console.log(color); 
}

console.log(hola()); 