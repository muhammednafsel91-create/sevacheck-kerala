
const CACHE_NAME = "sevacheck-pwa-v1";

const APP_FILES = [
  "/",
  "/index.html",
  "/style.css",
  "/script.js",
  "/manifest.json",
  "/assets/pwa-app-icons/192.png",
  "/assets/pwa-app-icons/512.png",
  "/assets/pwa-app-icons/icon-maskable-512.png",
  "/apple-touch-icon.png"
];

// Install: cache the essential app files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(APP_FILES);
    })
  );
});

// Activate: remove older SevaCheck PWA caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) =>
            name.startsWith("sevacheck-pwa-") &&
            name !== CACHE_NAME
          )
          .map((name) => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: network-first for pages, cache-first with update for static assets
self.addEventListener("fetch", (event) => {
  const request = event.request;

  if (request.method !== "GET") return;

  const url = new URL(request.url);

  // Do not cache external websites or services
  if (url.origin !== self.location.origin) return;

  // Pages: try internet first, then show cached homepage offline
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put("/index.html", copy);
            });
          }
          return response;
        })
        .catch(async () => {
          return (
            await caches.match("/index.html")
          ) || new Response("You are offline. Please reconnect to the internet.", {
            headers: { "Content-Type": "text/plain; charset=utf-8" }
          });
        })
    );
    return;
  }

  // Cache only static scripts, styles, images and fonts
  if (["script", "style", "image", "font"].includes(request.destination)) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        const networkUpdate = fetch(request).then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, copy);
            });
          }
          return response;
        });

        return cachedResponse || networkUpdate;
      })
    );
  }
});
