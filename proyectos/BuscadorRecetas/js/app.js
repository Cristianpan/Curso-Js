document.addEventListener("DOMContentLoaded", initApp);
const categoriesSelect = document.getElementById("categorias");
const result = document.getElementById("resultado");
const saveBtn = document.querySelector(".save-btn");
const modal = new bootstrap.Modal("#modal", {});

function initApp() {
  categoriesSelect.addEventListener("change", selectCategory);
  getCategories();
}

function getCategories() {
  const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      showCategories(result.categories);
    });
}

function showCategories(categories = []) {
  const fragment = document.createDocumentFragment();
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category.strCategory;
    option.textContent = category.strCategory;
    fragment.appendChild(option);
  });

  categoriesSelect.appendChild(fragment);
}

function selectCategory(e) {
  const category = e.target.value;
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  fetch(url)
    .then((response) => response.json())
    .then((result) => showRecipes(result.meals));
}

function showRecipes(recipes = []) {
  clearHtml(result);

  const heading = document.createElement("H2");
  heading.classList.add("text-center", "text-black", "my-5");
  heading.textContent = recipes.length
    ? "Resultados"
    : " No se han encontrado resultados";
  result.appendChild(heading);
  const fragment = document.createDocumentFragment();
  recipes.forEach((recipe) => {
    const { idMeal, strMeal, strMealThumb } = recipe;

    const recipeContainer = document.createElement("div");
    recipeContainer.classList.add("col-md-4");

    const recipeCard = document.createElement("div");
    recipeCard.classList.add("card", "mb-4");

    const recipeImage = document.createElement("img");
    recipeImage.classList.add("card-img-top");
    recipeImage.alt = `Imagen de la receta ${strMeal}`;
    recipeImage.loading = "lazy";
    recipeImage.src = strMealThumb;

    const recipeCardBody = document.createElement("div");
    recipeCardBody.classList.add("card-body");

    const recipeHeading = document.createElement("H3");
    recipeHeading.classList.add("card-title", "mb-3");
    recipeHeading.textContent = strMeal;

    const recipeButton = document.createElement("button");
    recipeButton.classList.add("btn", "btn-danger", "w-100");
    recipeButton.textContent = "Ver Receta";
    recipeButton.onclick = function () {
      selectRecipe(idMeal);
    };

    recipeCardBody.appendChild(recipeHeading);
    recipeCardBody.appendChild(recipeButton);
    recipeCard.appendChild(recipeImage);
    recipeCard.appendChild(recipeCardBody);
    recipeContainer.appendChild(recipeCard);

    fragment.appendChild(recipeContainer);
  });

  result.appendChild(fragment);
}

function selectRecipe(id) {
  const url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  fetch(url)
    .then((response) => response.json())
    .then((result) => showRecipeModal(result.meals[0]));
}

function showRecipeModal(recipe) {
  const { idMeal, strInstructions, strMeal, strMealThumb } = recipe;
  const modalContainer = document.querySelector("#modal");
  const title = modalContainer.querySelector(".modal-title");
  const body = modalContainer.querySelector(".modal-body");

  title.textContent = strMeal;

  saveBtn.textContent = isFavorite(idMeal) ? "Eliminar Favorito" : "Guardar Favorito";
  saveBtn.onclick = function () {
    if (!isFavorite(idMeal)) {
      addToFavorites({ id: idMeal, title: strMeal, img: strMealThumb });
    } else {
      deleteToFavorite(idMeal);
    }
  };

  body.innerHTML = `
        <img class="img-fluid" src="${strMealThumb}" alt ="receta ${strMeal}"><img>
        <h3 class="my-3">Instrucciones<h3>
        <p>${strInstructions}</p>
        <h3 class="my-3">Ingredientes y Cantidades<h3>
    `;

  let i = 1;
  let ingredient;
  const listGroup = document.createElement("ul");
  listGroup.classList.add("list-group");
  while ((ingredient = recipe[`strIngredient${i}`])) {
    const measure = recipe[`strMeasure${i}`];

    const ingredientLi = document.createElement("li");
    ingredientLi.classList.add("list-group-item");
    ingredientLi.textContent = `${ingredient} - ${measure}`;
    listGroup.appendChild(ingredientLi);
    i++;
  }

  body.appendChild(listGroup);

  modal.show();
}

function isFavorite(recipeId) {
  const favorites = JSON.parse(localStorage.getItem("favorites")) ?? [];
  return favorites.some((favorite) => favorite.id === recipeId);
}

function addToFavorites(recipe) {
  const favorites = JSON.parse(localStorage.getItem("favorites")) ?? [];
  localStorage.setItem("favorites", JSON.stringify([...favorites, recipe]));
  saveBtn.textContent = "Eliminar Favorito";
}

function deleteToFavorite(recipeId) {
  const favorites = JSON.parse(localStorage.getItem("favorites")) ?? [];

  localStorage.setItem(
    "favorites",
    JSON.stringify(favorites.filter((favorite) => favorite.id !== recipeId))
  );
  saveBtn.textContent = "Guardar Favorito";
}

function clearHtml(element) {
  while (element.firstChild) {
    element.firstChild.remove();
  }
}
