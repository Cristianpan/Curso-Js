const cryptoSelect = document.querySelector("#criptomonedas");
const coinSelect = document.querySelector("#moneda");
const form = document.querySelector("#formulario");
const result = document.querySelector("#resultado");
const objSearch = {
  coin: "",
  crypto: "",
};

document.addEventListener("DOMContentLoaded", () => {
  consultCriypto();
  form.addEventListener("submit", submitForm);
  coinSelect.addEventListener("change", getData);
  cryptoSelect.addEventListener("change", getData);
});

function consultCriypto() {
  const url =
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

  fetch(url)
    .then((response) => response.json())
    .then((result) => createOptions(result.Data));
}

function createOptions(cryptos) {
  console.log(cryptos);
  const optionsFragment = document.createDocumentFragment();
  cryptos.forEach((crypto) => {
    const {
      CoinInfo: { FullName, Name },
    } = crypto;
    const option = document.createElement("option");
    option.value = Name;
    option.textContent = FullName;
    optionsFragment.appendChild(option);
    console.log(option);
  });

  cryptoSelect.appendChild(optionsFragment);
}

function getData(e) {
  objSearch[e.target.name] = e.target.value;
}

function submitForm(e) {
  e.preventDefault();
  const { coin, crypto } = objSearch;

  if (!coin || !crypto) {
    showAlert("Todos los campos son obligatorios");
    return;
  }

  consultAPI();
}

function showAlert(message) {
  let alert = document.querySelector(".error");

  if (!alert) {
    alert = document.createElement("p");
    alert.classList.add("error");
    alert.textContent = message;

    form.appendChild(alert);

    setTimeout(() => {
      alert.remove();
    }, 3000);
  }
}

function consultAPI() {
  const { coin, crypto } = objSearch;
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${coin}`;
  showSpinner();
  fetch(url)
    .then((response) => response.json())
    .then((result) => showResult(result.DISPLAY[crypto][coin]));
}

function showResult(cryptoResult) {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = cryptoResult;
  clearHtml();
  const price = document.createElement("p");
  price.classList.add("precio");
  price.innerHTML = `El precio es: <span>${PRICE}</span>`;
  const highPrice = document.createElement("p");
  highPrice.innerHTML = `Precio más alto: <span>${HIGHDAY}</span>`;
  const lowPrice = document.createElement("p");
  lowPrice.innerHTML = `Precio más bajo: <span>${LOWDAY}</span>`;
  const lastHours = document.createElement("p");
  lastHours.innerHTML = `Variación últimas 24 horas: <span>${CHANGEPCT24HOUR}</span>`;
  const lastUpdate = document.createElement("p");
  lastUpdate.innerHTML = `Última actualización: <span>${LASTUPDATE}</span>`;

  result.appendChild(price);
  result.appendChild(highPrice);
  result.appendChild(lowPrice);
  result.appendChild(lastHours);
  result.appendChild(lastUpdate);
}

function showSpinner() {
  clearHtml();
  const spinner = document.createElement("div");
  spinner.classList.add("spinner");

  spinner.innerHTML = `
    <div class="bounce1"></div>
    <div class="bounce2"></div>
    <div class="bounce3"></div>
  `;
  result.appendChild(spinner); 
}

function clearHtml() {
  while (result.firstChild) {
    result.firstChild.remove();
  }
}
