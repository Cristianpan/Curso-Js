//Variables y Selectores 

const formulario = document.querySelector('#agregar-gasto'); 
const gastoListado = document.querySelector("#gastos ul"); 

const formularioPresupuesto = document.querySelector('#agregar-presupuesto'); 
const inputPresupuesto = document.querySelector('#input-presupuesto'); 



//eventos 
document.addEventListener('DOMContentLoaded', iniciarApp); 



//funciones 

function iniciarApp(){
    inputPresupuesto.addEventListener('keydown', validarInputNumber); 
    formularioPresupuesto.addEventListener('submit', agregarPresupuesto); 
    formulario.addEventListener('submit', agregarGasto); 
}

//clases 

class Presupuesto{
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto); 
        this.restante = Number(presupuesto); 
        this.gastos = []; 
    }

    nuevoGasto(gasto) {
        this.gastos = [...this.gastos, gasto]; 
        this.calcularRestante(); 
    }

    calcularRestante(){
        const gastado = this.gastos.reduce((total, gasto) => total + gasto.cantidad, 0); 
        this.restante = this.presupuesto - gastado;   
    }

    eliminarGasto(id) {
        this.gastos = this.gastos.filter(gasto => gasto.id !== id); 
    }
}

class UI {
    insertarPresupuesto(cantidad){
        const {presupuesto, restante} = cantidad;
        
        //agregar al HMTL
        document.querySelector('#total').textContent = presupuesto; 
        document.querySelector('#restante').textContent = restante; 
    }

    imprimirAlerta(mensaje, tipo, identificador = '.primario',  reference = formulario) {
        const alerta = document.createElement('p'); 
        alerta.classList.add('text-center', 'alert', `alert-${tipo === 'error' ? 'danger': 'success'}`); 
        alerta.textContent = mensaje; 

        document.querySelector(identificador).insertBefore(alerta, reference); 

        setTimeout(()=> {
            alerta.remove(); 
        }, 3000)
    }

    mostrarGastos(gastos) {
        this.limpiarGastoListado(); 

        gastos.forEach(gasto => {
            const {cantidad, nombre, id} = gasto; 

            //Crear LI
            const nuevoGasto = document.createElement('li'); 
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center'
            nuevoGasto.dataset.id = id;


            //Agregar el HTML
            nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-pill">$${cantidad}</span>`

            //Boton de borrado
            const btnBorrar = document.createElement('button'); 
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto'); 
            btnBorrar.textContent = "Borrar"; 
            btnBorrar.onclick = () => {
                eliminarGasto(id); 
            }
            nuevoGasto.appendChild(btnBorrar); 

            //Agregar al HTML
            gastoListado.appendChild(nuevoGasto); 
        });
    }

    actualizarRestante(restante) {
        document.querySelector('#restante').textContent = restante; 
    }

    comprobarPresupuesto(presupuestoObj) {
        const {presupuesto, restante } = presupuestoObj; 
        const restanteDiv = document.querySelector('.restante');
        let isDisabled = false;  

        if ((presupuesto / 4) > restante) {
            restanteDiv.classList.remove('alert-success', 'alert-warning'); 
            restanteDiv.classList.add('alert-danger'); 
        } else if ((presupuesto / 2) > restante) {
            restanteDiv.classList.remove('alert-success', 'alert-danger'); 
            restanteDiv.classList.add('alert-warning'); 
        } else {
            restanteDiv.classList.remove('alert-warning', 'alert-danger'); 
            restanteDiv.classList.add('alert-success'); 
        }

        if (restante <= 0){
            ui.imprimirAlerta('El presupuesto se ha agotado', 'error'); 
            isDisabled = true; 
        }
        formulario.querySelector('button[type="submit"]').disabled = isDisabled; 

    }

    limpiarGastoListado() {
        while(gastoListado.firstChild){
            gastoListado.removeChild(gastoListado.firstChild); 
        }
    }
}



const ui = new UI();
let presupuesto; 


//Evita que pueda ser agregado los caracteres e-+
function validarInputNumber(e) {
    const value = e.key;
    
    if(value === 'e' || value === 'E' || value === '+' || value === '-') {
       e.preventDefault(); 
    }
}


function agregarPresupuesto(e){
    e.preventDefault(); 

    const value = inputPresupuesto.value; 

    if (value < 0 || !value) {
        ui.imprimirAlerta('El presupuesto debe tener un valor mayor de 0', 'error', '.seccion-presupuesto',  formularioPresupuesto); 
    } else {
        document.querySelector('.hidden').classList.remove('hidden'); 
        document.querySelector('.seccion-presupuesto').classList.add('hidden'); 

        presupuesto = new Presupuesto(value); 
        ui.insertarPresupuesto(presupuesto); 
    }
}


function agregarGasto(e){
    e.preventDefault(); 

    const nombre = document.querySelector('#gasto').value; 
    const cantidad = Number(document.querySelector('#cantidad').value); 



    try {
        if (!nombre || !cantidad) {
            throw new Error('Ambos campos son obligatorios')
        } else if (isNaN(cantidad) || cantidad <= 0){
            throw new Error('Cantidad no valida')
        }

        const gasto = {id: Date.now(), nombre, cantidad};  
        ui.imprimirAlerta('Gasto agregado Correctamente'); 
        presupuesto.nuevoGasto(gasto);
        actualizarListado();  

         
        formulario.reset();

        
    } catch (error) {
        ui.imprimirAlerta(error.message, 'error');
    }


}

function eliminarGasto(id){
    console.log(presupuesto.gastos); 
    presupuesto.eliminarGasto(id); 
    presupuesto.calcularRestante(); 
    actualizarListado(); 
}

function actualizarListado(){
    const {gastos, restante} = presupuesto; 

        ui.mostrarGastos(gastos);
        ui.actualizarRestante(restante)
        ui.comprobarPresupuesto(presupuesto);
}