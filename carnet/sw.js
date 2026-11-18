// CARNET CREDIT — SERVICE WORKER PRO v121 (PURGE TOTAL DES ANCIENS CACHES)
const CACHE_NAME = 'carnet-credit-v121';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(keys.map((k) => caches.delete(k)));
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  // Tout appel réseau est dirigé en direct sur le serveur (Network First)
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
