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

  dishes.forEach((dish) => {
    const { name, id, category, price } = dish;
    const row = document.createElement("div");
    row.classList.add("row", "py-3", "border-top");
    const nameDiv = document.createElement("div");
    nameDiv.classList.add("col-md-4");
    nameDiv.textContent = name;

    const priceDiv = document.createElement("div");
    priceDiv.classList.add("col-md-3", "fw-bold");
    priceDiv.textContent = `$${price}`;

    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("col-md-3");
    categoryDiv.textContent = categories[category];

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

    row.appendChild(nameDiv);
    row.appendChild(priceDiv);
    row.appendChild(categoryDiv);
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
    const ordersUpdate = orders.filter((order) => order.id !== product.id);
    client.orders = [...ordersUpdate];
  }

  if (client.orders.length) {
    updateSummary();
  } else {
    removeSummary();
  }
}

function updateSummary() {
  const content = document.querySelector("#resumen .contenido");
  clearHTML(content);

  const summary = document.createElement("div");
  summary.classList.add(
    "col-md-6",
    "card",
    "py-2",
    "px-3",
    "shadow",
    "summary"
  );

  const table = document.createElement("p");
  table.classList.add("fw-bold");
  table.innerHTML = `Mesa: <span class="fw-normal">${client.table}</span>`;

  const hour = document.createElement("p");
  hour.classList.add("fw-bold");
  hour.innerHTML = `Hora: <span class="fw-normal">${client.hour}</span>`;

  const heading = document.createElement("h3");
  heading.textContent = "Platillos consumidos";
  heading.classList.add("my-4", "text-center");

  const group = document.createElement("ul");
  group.classList.add("list-group");

  const { orders } = client;

  orders.forEach((order) => {
    const { name, quantity, price, id } = order;

    const list = document.createElement("li");
    list.classList.add(
      "list-group-item",
      "border",
      "border-0",
      "border-top",
      "border-bottom"
    );

    list.innerHTML = `
      <h4 class="my-4">${name}</h4>
      <p class="fw-bold">Cantidad: <span class="fw-norma">${quantity}<span></p>
      <p class="fw-bold">Precio: <span class="fw-norma">$${price}<span></p>
      <p class="fw-bold">Precio: <span class="fw-norma">$${getSubtotal(
        price,
        quantity
      )}<span></p>
    `;

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn", "btn-danger");
    deleteBtn.textContent = "Eliminar del Pedido";
    deleteBtn.onclick = function () {
      deleteOrder(id);
    };

    list.appendChild(deleteBtn);
    group.appendChild(list);
  });

  summary.appendChild(heading);
  summary.appendChild(table);
  summary.appendChild(hour);
  summary.appendChild(group);

  content.appendChild(summary);

  showTipForm();
}

function deleteOrder(id) {
  const ordersUpdate = client.orders.filter((order) => order.id !== id);
  client.orders = [...ordersUpdate];

  document.getElementById(`dish-${id}`).value = 0;

  if (client.orders.length) {
    updateSummary();
  } else {
    removeSummary();
  }
}

function removeSummary() {
  document.querySelector(".summary").remove();
  const content = document.querySelector("#resumen .contenido");
  content.innerHTML = `
   <p class="text-center">Añade Productos al Pedido</p> 
  `;
}

function getSubtotal(price, quantity) {
  return price * quantity;
}

function showTipForm() {
  const content = document.querySelector("#resumen .contenido");
  const divFormulario = document.createElement("div");
  divFormulario.classList.add("card", "py-2", "px-3", "shadow");

  const form = document.createElement("div");
  form.classList.add("col-md-6", "formulario");

  const heading = document.createElement("h3");
  heading.classList.add("my-4", "text-center");
  heading.textContent = "Propina";

  const radio10 = document.createElement("input");
  radio10.type = "radio";
  radio10.name = "propina";
  radio10.value = 10;
  radio10.classList.add("form-check-input");
  radio10.onclick = calculateTip;

  const radio10Label = document.createElement("label");
  radio10Label.textContent = "10%";
  radio10Label.classList.add("form-check-label");

  const radio10Div = document.createElement("div");
  radio10Div.classList.add("form-check");

  radio10Div.appendChild(radio10);
  radio10Div.appendChild(radio10Label);

  const radio25 = document.createElement("input");
  radio25.type = "radio";
  radio25.name = "propina";
  radio25.value = 25;
  radio25.classList.add("form-check-input");
  radio25.onclick = calculateTip;

  const radio25Label = document.createElement("label");
  radio25Label.textContent = "25%";
  radio25Label.classList.add("form-check-label");

  const radio25Div = document.createElement("div");
  radio25Div.classList.add("form-check");

  radio25Div.appendChild(radio25);
  radio25Div.appendChild(radio25Label);
  const radio50 = document.createElement("input");
  radio50.type = "radio";
  radio50.name = "propina";
  radio50.value = 50;
  radio50.classList.add("form-check-input");
  radio50.onclick = calculateTip;

  const radio50Label = document.createElement("label");
  radio50Label.textContent = "50%";
  radio50Label.classList.add("form-check-label");

  const radio50Div = document.createElement("div");
  radio50Div.classList.add("form-check");

  radio50Div.appendChild(radio50);
  radio50Div.appendChild(radio50Label);
  form.appendChild(divFormulario);
  divFormulario.appendChild(heading);
  divFormulario.appendChild(radio10Div);
  divFormulario.appendChild(radio25Div);
  divFormulario.appendChild(radio50Div);
  content.appendChild(form);
}

function calculateTip(e) {
  const { orders } = client;
  let subtotal = 0;
  const tipSelected = 1 + parseInt(e.target.value) / 100;

  orders.forEach(({ price, quantity }) => {
    subtotal += getSubtotal(price, quantity);
  });

  const tip = subtotal * tipSelected;
  const total = subtotal + tip;
  
  showTotal(subtotal, total, tip);
}

function showTotal(subtotal, total, tip) {
  document.querySelector('.total')?.remove(); 
  const divTotales = document.createElement('div'); 
  divTotales.classList.add('total'); 
  const subtotalText = document.createElement("p");
  subtotalText.classList.add("fs-5", "fw-bold", "mb-0", "mt-2");
  subtotalText.innerHTML = `Subtotal Consumo: <span class="fw-normal">$${subtotal}</span>`;
  const tipText = document.createElement("p");
  tipText.classList.add("fs-5", "fw-bold", "mb-0", "mt-2");
  tipText.innerHTML = `Propina: <span class="fw-normal">$${tip}</span>`;
  const totalText = document.createElement("p");
  totalText.classList.add("fs-5", "fw-bold", "mb-0", "mt-2");
  totalText.innerHTML = `Total Consumo: <span class="fw-normal">$${total}</span>`;

  
  divTotales.appendChild(subtotalText);
  divTotales.appendChild(tipText);
  divTotales.appendChild(totalText);
  document.querySelector(".formulario > div").appendChild(divTotales); 
}

function clearHTML(element) {
  while (element.firstChild) {
    element.firstChild.remove();
  }
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
