import {Cliente} from './cliente.js';

export default class Empresa extends Cliente {
    constructor(nombre, ahorro, categoria){
        super(nombre, ahorro); 
        this.categoria = categoria; 
    }

    mostrarInformación() {
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro} - Categoría: ${this.categoria}`; 
    }
} 