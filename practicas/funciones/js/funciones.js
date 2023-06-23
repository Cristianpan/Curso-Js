//Algunas funciones nativas

/* alert('hubo un error...');

prompt('Cual es tu edad?'); 

confirm('Seguro que quieres cerrar la ventana?'); */

console.log(parseInt('20'));

//Parametros a y b
function sumar(a, b) {
    return a + b;
}

const x = sumar(2, 3); //los valores representan argumentos
console.log(x);

//uso de parametros por default
function saludar(nombre = 'Desconocido', apellido = ""){
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar("Cristian", "Pan");
saludar("Cristian");
saludar()

//Añadir funciones a objetos;

const calculadora = {
    resultado: 0, 
    sumar: function(a = 0,b = 0) {
        this.resultado = a + b; 
    },
    restar: function(a = 0, b = 0) {
        this.resultado = b - a;
    }, 
    multiplicar: function(a = 0, b = 0){
        this.resultado = a *b; 
    }, 
    obtenerResultado: function(){
        console.log(this.resultado); 
    }
}

calculadora.sumar(5, 3);
calculadora.obtenerResultado();




