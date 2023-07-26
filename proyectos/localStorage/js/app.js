//variables
const formulario = document.querySelector("#formulario");
const listadoTweets = document.querySelector("#lista-tweets");
let tweets = [];

//event listeners
eventListeners();

function eventListeners() {
  document.addEventListener("DOMContentLoaded", obtenerTweetsStorage);
  formulario.addEventListener("submit", agregarTweet);
}

//funciones

function agregarTweet(e) {
  e.preventDefault();

  const { value: tweet } = document.querySelector("#tweet");

  if (!tweet.trim()) {
    mostrarError("Un mensaje no puede ir vacio");
  } else {
    formulario.reset();
    guardarObjeto(tweet);
    mostrarListadoTweets();
  }
}

function obtenerTweetsStorage() {
  const tweetsStorage = localStorage.getItem("tweets");

  tweets = tweetsStorage ? JSON.parse(tweetsStorage) : [];
  mostrarListadoTweets();
}

function mostrarError(mensaje) {
  const auxError = document.querySelector('.error'); 

  if (!auxError) {
    const mensajeError = document.createElement("p");
    mensajeError.classList.add("error");
    mensajeError.textContent = mensaje;
  
    const contenido = document.querySelector("#contenido");
    contenido.appendChild(mensajeError);
  
    setTimeout(() => {
      mensajeError.remove();
    }, 3000);
  }


}

function limpiarListadoTweets() {
  while (listadoTweets.firstChild) {
    listadoTweets.removeChild(listadoTweets.firstChild);
  }
}

function mostrarListadoTweets() {
  limpiarListadoTweets();
  tweets.forEach((tweet) => {
    //crear boton de eliminar
    const btnEliminar = document.createElement("a");
    btnEliminar.classList.add("borrar-tweet");
    btnEliminar.innerText = "X";
    //crear accion del boton
    btnEliminar.onclick = () => {
      borrarTweet(tweet.id);
    };

    //crear elemento para mostrar el tweer
    const li = document.createElement("li");
    li.textContent = tweet.tweet;

    li.appendChild(btnEliminar);

    listadoTweets.appendChild(li);
  });
}

function guardarObjeto(tweet) {
  const tweetObj = {
    id: Date.now(),
    tweet,
  };
  tweets = [...tweets, tweetObj];

  localStorage.setItem("tweets", JSON.stringify(tweets));
}

function borrarTweet(id) {
  tweets = tweets.filter((tweet) => tweet.id !== id);
  localStorage.setItem("tweets", JSON.stringify(tweets));
  mostrarListadoTweets();
}
