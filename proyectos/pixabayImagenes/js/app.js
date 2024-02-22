const result = document.querySelector("#resultado");
const form = document.querySelector("#formulario");
const paginatorDiv = document.querySelector("#paginacion");
const registersPerPage = 40;
let totalPages;
let iterator;

document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", validateForm);
});

function validateForm(e) {
  e.preventDefault();
  const search = document.querySelector("#termino").value;

  if (!search) {
    showAlert("Agrega un término de búsqueda");
    return;
  }

  searchImages(search);
}

function showAlert(message) {
  let alert = document.querySelector(".alert");

  if (!alert) {
    alert = document.createElement("p");
    alert.classList.add(
      "alert",
      "bg-red-100",
      "border-red-400",
      "text-red-700",
      "px-4",
      "py-3",
      "rounded",
      "max-w-lg",
      "mx-auto",
      "mt-6",
      "text-center"
    );

    alert.innerHTML = `
      <strong class="font-bold">Error!</strong>
      <span class"block sm:inline">${message}</span>
    `;
    form.appendChild(alert);

    setTimeout(() => {
      alert.remove();
    }, 3000);
  }
}

function searchImages(query) {
  const key = "32106930-e9c6450a07e221a24af2b2f5e";
  const url = `https://pixabay.com/api/?key=${key}&q=${query}&per_page=${registersPerPage}`;

  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      totalPages = calculatePages(result.totalHits);
      showImages(result.hits);
    });
}

function* createPaginator(total) {
  for (let i = 1; i <= total; i++) {
    yield i;
  }
}

function showImages(images) {
  clearHtml(result);
  images.forEach((image) => {
    const { previewURL, likes, views, largeImageURL } = image;

    result.innerHTML += `
            <div class="w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4">
                <div class="bg-white">
                    <img class="w-full" loading="lazy"  src="${previewURL}">

                    <div class="p-4">
                        <p class="font-bold">${likes} <span class="font-light">Me gusta</span></p>
                        <p class="font-bold">${views} <span class="font-light">Veces Vista</span></p>
                        <a href="${largeImageURL}" class=" block w-full bg-blue-800 hover:bg-blue-500 text-white uppercase font-bold text-center rounded mt-5 p-1" target="_blank" rel="noopener noreferrer">Ver Imagen</a> 
                    </div>
                </div>
            </div>
        `;
  });

  printPaginator();
}

function printPaginator() {
  clearHtml(paginatorDiv);
  iterator = createPaginator(totalPages);
  const fragment = document.createDocumentFragment();

  while (true) {
    const { value, done } = iterator.next();
    if (done) {
      paginatorDiv.appendChild(fragment);
      return;
    }

    const button = document.createElement("a");
    button.href = "#";
    button.dataset.page = value;
    button.textContent = value;
    button.classList.add(
      "next",
      "bg-yellow-400",
      "px-4",
      "py1",
      "mr-2",
      "font-bold",
      "mb-4",
      "uppercase",
      "rounded"
    );

    fragment.appendChild(button);
  }
}

function calculatePages(total) {
  return parseInt(Math.ceil(total / registersPerPage));
}

function clearHtml(element) {
  while (element.firstChild) {
    element.firstChild.remove();
  }
}
