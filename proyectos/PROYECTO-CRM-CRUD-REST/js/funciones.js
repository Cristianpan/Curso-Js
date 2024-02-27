export function showAlert(message, reference) {
  let alert = document.querySelector(".alert");

  if (!alert) {
    alert = document.createElement("p");
    alert.classList.add(
      "bg-red-100",
      "border-red-400",
      "text-red-700",
      "px-4",
      "py-3",
      "rounded",
      "max-w-lg",
      "mt-6",
      "text-center"
    );

    alert.innerHTML = `
        <strong class="font-bold">Error!</strong>
        <span class="block sm:inline">${message}</span>
    `;

    reference.appendChild(alert);
    setTimeout(() => {
      alert.remove();
    }, 3000);
  }
}

export function hasEmptyField(obj) {
  return Object.values(obj).every((input) => input === "");
}

