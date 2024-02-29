//Event loop
console.log('Primero'); 

setTimeout(()=> {
    console.log('Segundo')
}, 0)

console.log('Tercero'); 

setTimeout(()=> {
    console.log('Cuarto')
}, 0)

function holaMundo() {
    console.log('Hola mundo'); 
}

holaMundo(); 

new Promise(resolve => {
    resolve('Desconocido...');
}).then(resultado => console.log(resultado))


console.log('Ultimo'); 