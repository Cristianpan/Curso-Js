export const nombreCliente = 'Cristian';
export const ahorro = 123; 


export function mostrarInformación(nombre, ahorro) {
    return `Cliente: ${nombre} - Ahorro: ${ahorro}`; 
}

export function tieneSaldo(ahorro){
    if (ahorro > 0){
        console.log('Si tiene saldo'); 
    } else {
        console.log('El cliente no tiene saldo'); 
    }
}

export class Cliente {
    constructor (nombre, ahorro){
        this.nombre = nombre; 
        this.ahorro = ahorro; 
    }

    mostrarInformación() {
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`; 
    }
}