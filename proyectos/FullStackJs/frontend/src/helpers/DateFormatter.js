export function formatDateToInput(date = Date.now()) {
  const today = new Date(date);
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  const format = today.toLocaleDateString("es", options).split("/");

  return `${format[2]}-${format[1]}-${format[0]}`;
}

export function formatDate(date) {
  const newDate = new Date(date);

  return newDate.toLocaleDateString("es-MX", {
    dateStyle: 'long'
  });
}
