//Variables y Selectores 

const formulario = document.querySelector('#agregar-gasto');
const inputCantidad = formulario.querySelector('#cantidad');  
const gastoListado = document.querySelector("#gastos ul"); 

const formularioPresupuesto = document.querySelector('#agregar-presupuesto'); 
const inputPresupuesto = formularioPresupuesto.querySelector('#input-presupuesto'); 

const btnReseteo = document.querySelector('#resetear'); 



//eventos 
document.addEventListener('DOMContentLoaded', iniciarApp); 



//funciones 
function iniciarApp(){
    inputCantidad.addEventListener('input', validarInputNumber); 
    inputPresupuesto.addEventListener('input', validarInputNumber); 
    formularioPresupuesto.addEventListener('submit', agregarPresupuesto); 
    formulario.addEventListener('submit', agregarGasto); 
    btnReseteo.addEventListener('click', resetearPresupuesto); 

    obtenerDatosIniciales(); 
}

//clases 

class Presupuesto{
    constructor(presupuesto, restante = presupuesto, gastos = []){
        this.presupuesto = Number(presupuesto); 
        this.restante = Number(restante); 
        this.gastos = gastos; 
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
        this.calcularRestante(); 
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


function obtenerDatosIniciales() {
    const presupuestoStorage = localStorage.getItem('presupuesto'); 
    if (presupuestoStorage) {
        cambiarPagina(); 
        const aux = JSON.parse(presupuestoStorage); 
        const {presupuesto: cantidad, restante, gastos} = aux; 
        presupuesto = new Presupuesto(cantidad, restante, gastos); 
        ui.insertarPresupuesto(presupuesto); 
        ui.comprobarPresupuesto(presupuesto);
        ui.mostrarGastos(gastos);  
    }
}

function cambiarPagina(){
    document.querySelector('.seccion-gasto').classList.remove('hidden'); 
    document.querySelector('.seccion-presupuesto').classList.add('hidden');
}

//Evita que pueda ser agregado los caracteres e-+
function validarInputNumber(e) {
    const value = e.target.value;
    const regex = /^[0-9]+\.{0,1}([0-9]{1,2})?$/

    if (isNaN(value) || !regex.test(value)) {
        e.target.value = value.slice(0, -1);
    }
}


function agregarPresupuesto(e){
    e.preventDefault(); 

    const value = inputPresupuesto.value; 

    if (value < 0 || !value) {
        ui.imprimirAlerta('El presupuesto debe tener un valor mayor de 0', 'error', '.seccion-presupuesto',  formularioPresupuesto); 
    } else {
        cambiarPagina(); 
        presupuesto = new Presupuesto(value); 
        localStorage.setItem('presupuesto', JSON.stringify(presupuesto)); 
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
        localStorage.setItem('presupuesto', JSON.stringify(presupuesto)); 
        actualizarListado();  

         
        formulario.reset();

        
    } catch (error) {
        ui.imprimirAlerta(error.message, 'error');
    }


}

function eliminarGasto(id){
    presupuesto.eliminarGasto(id); 
    localStorage.setItem('presupuesto', JSON.stringify(presupuesto)); 
    actualizarListado(); 
}

function actualizarListado(){
    const {gastos, restante} = presupuesto; 

        ui.mostrarGastos(gastos);
        ui.actualizarRestante(restante)
        ui.comprobarPresupuesto(presupuesto);
}

function resetearPresupuesto() {
    const result = confirm("¿Desea agregar una nueva cuenta al cliente?"); 
    if (result) {
        localStorage.removeItem('presupuesto'); 
        window.location.reload(); 
    }
}