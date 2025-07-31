self.addEventListener("install", (e) => {
  e.waitUntil(
    // 1. ¡Cambio importante! Actualizamos el nombre de la caché a "v3".
    // Esto obliga al navegador a descargar todos los archivos de nuevo.
    caches.open("bjj-store-v3").then((cache) => {
      // 2. Aseguramos que la lista de archivos esté completa para que la app funcione offline.
      return cache.addAll([
        "/",
        "/index.html",
        "/style.css",
        "/app.js",
        "/routines.json",
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