const navegacion = document.querySelector('.navegacion');


console.log(navegacion.childNodes);//Los espacios en blanco tambine son considerados como elementos

console.log(navegacion.children); //Retorna solo los nodos


const card = document.querySelector('.card'); 

console.log(card.children[0]);

card.children[0].src = 'img/hacer2.jpg';


//traversing del hijo al padre

console.log(card.parentElement);//retorna el padre del elemento

console.log(card.nextSibling); //retorna el siguiente hermano del elemento actual


const ultimoCard = document.querySelector('.card:last-child');
console.log(ultimoCard);

console.log(ultimoCard.previousElementSibling); //retorna el hermano anterior del elemento actual