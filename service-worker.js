self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("bjj-store-v2").then((cache) => {
      // v2 incluye el nuevo archivo de rutinas
      return cache.addAll([
        "/",
        "/index.html",
        "/style.css",
        "/app.js",
        "/routines.json", // <-- AÑADIDO IMPORTANTE
        "/manifest.json",
        "/icon.png"
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      // Devuelve la respuesta de la caché si existe, si no, la busca en la red.
      return response || fetch(e.request);
    })
  );
});