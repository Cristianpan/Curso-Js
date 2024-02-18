const salida = document.querySelector("#salida");
const microfono = document.querySelector("#microfono");

microfono.addEventListener("click", ejecutarSpeechAPI);

function ejecutarSpeechAPI() {
  const SpeechRecognitions = webkitSpeechRecognition;

  const recognition = new SpeechRecognitions();
  recognition.start();
  recognition.onstart = function () {
    salida.classList.add('mostrar'); 
    salida.textContent = 'Escuchando'; 
  };

  recognition.onspeechend = function () {
    salida.textContent = 'Se dejo de grabar'; 
    recognition.stop(); 
  }

  recognition.onresult = function (e) {
    const {confidence, transcript} = e.results[0][0]; 

    const speech = document.createElement('p'); 
    speech.textContent = `Grabado:  ${transcript}`
    const seguridad = document.createElement('p'); 
    seguridad.textContent = `Seguridad:  ${parseInt(confidence * 100)}%`


    salida.appendChild(speech); 
    salida.appendChild(seguridad); 
  }
}
