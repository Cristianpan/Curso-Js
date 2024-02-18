document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    console.log("Usted está aquí");
  } else {
    console.log("Usted se ha ido del sitio");
  }
});
