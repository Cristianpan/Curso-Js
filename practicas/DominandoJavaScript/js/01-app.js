//scope 

const cliente = 'Cristian'; //global

function mostrarCliente(){
    console.log(cliente); 
}

function mostrarCliente2() {
    const cliente = 'Pedro'; 
    if (true) {
        const cliente = 'Ramiro'
        console.log(cliente); 
    }
    console.log(cliente); 
}

mostrarCliente2(); //Ramiro, Pedro
mostrarCliente(); //Cristian