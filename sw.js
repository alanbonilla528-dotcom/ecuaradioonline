const CACHE_NAME = "ecua-radio-v1";
const FILES = [
  "./",
  "./index.html",
  "./manifest.json",
  "./favicon.png",
  "./icon-192.png",
  "./icon-512.png",
  "./styles.css",
  "./script.js"
];

// Instalar
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES))
  );
  self.skipWaiting();
});

// Activar
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((k) => (k !== CACHE_NAME ? caches.delete(k) : null))
      )
    )
  );
  self.clients.claim();
});

// Fetch (no cachear stream)
self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);

  // Stream no se guarda en cache
  if (url.pathname.match(/\.(mp3|aac|m3u8|ts)$/i)) return;

  e.respondWith(
    caches.match(e.request).then((cached) => cached || fetch(e.request))
  );
});
