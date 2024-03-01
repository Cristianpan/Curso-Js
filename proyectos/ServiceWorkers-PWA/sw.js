const nombreCache = "apv-v6";

const archivos = [
  "/",
  "/error.html",
  "/index.html",
  "/css/bootstrap.css",
  "/css/styles.css",
  "/js/app.js",
  "/js/apv.js",
];

self.addEventListener("install", (e) => {
  console.log("Instalado el Service Worker");

  e.waitUntil(
    caches.open(nombreCache).then((cache) => {
      console.log("cacheando");
      cache.addAll(archivos);
    })
  );
});

self.addEventListener("activate", (e) => {
  console.log("Service worker activado");

  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== nombreCache)
          .map((key) => caches.delete(key))
      );
    })
  );
});

//Evento fetch para descargar archivos
self.addEventListener("fetch", (e) => {
  console.log("Fetch...");

  e.respondWith(
    caches
      .match(e.request)
      .then((cacheResponse) =>
        cacheResponse ? cacheResponse : caches.match("/error.html")
      )
  );
});
