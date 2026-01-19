const CACHE = "ecuaradio-v1";
const APP_SHELL = ["/", "/index.html", "/manifest.webmanifest"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(APP_SHELL)));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
});

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;

  const url = new URL(e.request.url);
  const isAudio =
    e.request.destination === "audio" ||
    url.pathname.endsWith(".mp3") ||
    url.pathname.endsWith(".aac") ||
    url.pathname.endsWith(".m3u8") ||
    url.pathname.endsWith(".pls");

  if (isAudio) return;

  if (e.request.mode === "navigate") {
    e.respondWith(caches.match("/").then((r) => r || fetch(e.request)));
    return;
  }

  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
