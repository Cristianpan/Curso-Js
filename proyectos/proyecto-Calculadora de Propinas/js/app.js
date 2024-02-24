let client = {
  table: "",
  hour: "",
  orders: [],
};

const categories = {
  1: "Comida",
  2: "Bebidas",
  3: "Postres",
};

const btnSaveClient = document.querySelector("#guardar-cliente");

btnSaveClient.addEventListener("click", saveClient);

function saveClient(e) {
  const table = document.querySelector("#mesa").value;
  const hour = document.querySelector("#hora").value;

  if (!table || !hour) {
    createAlert(
      "Todos los campos son obligatorios",
      document.querySelector(".modal-body form")
    );
    return;
  }

  client = { ...client, table, hour };
  const modalForm = document.querySelector("#formulario");
  bootstrap.Modal.getInstance(modalForm).hide();
  showSections();
  getDishes();
}

function showSections() {
  const sectionsHidden = document.querySelectorAll(".d-none");
  sectionsHidden.forEach((section) => {
    section.classList.remove("d-none");
  });
}

function getDishes() {
  const url = `http://localhost:4000/platillos`;

  fetch(url)
    .then((response) => response.json())
    .then((result) => showDishes(result))
    .catch((error) => console.log(error));
}

function showDishes(dishes) {
  const fragment = document.createDocumentFragment();

  dishes.forEach(({name, id, category, price}) => {
    const row = document.createElement("div");
    row.classList.add("row", "py-3", "border-top");
    const name = document.createElement("div");
    name.classList.add("col-md-4");
    name.textContent = name;

    const price = document.createElement("div");
    price.classList.add("col-md-3", "fw-bold");
    price.textContent = `$${price}`;

    const category = document.createElement("div");
    category.classList.add("col-md-3");
    category.textContent = categories[category];

    const inputContainer = document.createElement("div");
    inputContainer.classList.add("col-md-2");

    const inputQuantity = document.createElement("input");
    inputQuantity.classList.add("form-control");
    inputQuantity.type = "number";
    inputQuantity.min = 0;
    inputQuantity.id = `dish-${id}`;
    inputQuantity.value = 0;

    inputQuantity.onchange = function () {
      const quantity = parseInt(inputQuantity.value);
      addDish({ ...dish, quantity });
    };

    inputContainer.appendChild(inputQuantity);

    row.appendChild(name);
    row.appendChild(price);
    row.appendChild(category);
    row.appendChild(inputContainer);
    fragment.appendChild(row);
  });

  document.querySelector("#platillos").appendChild(fragment);
}

function addDish(product) {
  let { orders } = client;
  if (product.quantity) {
    if (orders.some((order) => order.id === product.id)) {
      const ordersUpdate = orders.map((order) => {
        if (order.id === product.id) {
          return product;
        }
        return order;
      });

      client.orders = [...ordersUpdate];

    } else {
      client.orders = [...orders, product];
    }
  } else {
    const ordersUpdate = orders.filter(order => order.id !== product.id); 
    client.orders = [...ordersUpdate]
  }

  console.log(client); 
}

function createAlert(message, referer) {
  let alert = document.querySelector(".invalid-feedback");

  if (!alert) {
    alert = document.createElement("div");
    alert.classList.add("invalid-feedback", "d-block", "text-center");
    alert.textContent = message;
    referer.appendChild(alert);

    setTimeout(() => {
      alert.remove();
    }, 3000);
  }
}
