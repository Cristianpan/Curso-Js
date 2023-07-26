const aprendiendo = () => console.log("Aprendiendo JavaScript");

aprendiendo();

const sumar = (a = 0, b = 0) => console.log(a + b);

sumar(2, 3);
sumar(2, 8);

/**
 * No es posible utilizar arrow functions para hacer referencia a un 
 * atributo de objeto, ya que no puede acceder a este a través del this
 */

const calculadora = {
    resultado: 0, 
    sumar: (a = 0,b = 0) => {
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
    },
    set nuevoResultado(x) {
        this.resultado = x;
    },
}

calculadora.sumar(5, 3);
calculadora.obtenerResultado(); //0
calculadora.nuevoResultado = 8;
calculadora.obtenerResultado();
