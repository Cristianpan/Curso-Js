let valor;

//obtener fecha actual
const diaHoy = new Date();

//crear una fecha dado un string
const fecha = new Date("2023-07-23");

valor = diaHoy;
console.log(valor);
valor = fecha.toLocaleDateString();
console.log(valor);

//metodos de fechas
const year = diaHoy.getFullYear();
const mes = diaHoy.getMonth(); //inicia en enero:0
const dia = diaHoy.getDate(); 
const minutos = diaHoy.getMinutes(); 
const horas = diaHoy.getHours(); 

//asi como hay get, también hay set
diaHoy.setFullYear("2010"); 


console.log(year, mes, dia, minutos, horas)
console.log(diaHoy.toLocaleDateString()); 