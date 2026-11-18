// CARNET CREDIT — SERVICE WORKER PRO v122
const CACHE_NAME = 'carnet-credit-v122';

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
  // Navigation et HTML : TOUJOURS en direct sur le réseau (Network Only avec fallback hors-ligne)
  if (event.request.mode === 'navigate' || event.request.url.includes('index.html') || event.request.url.includes('version.json')) {
    event.respondWith(
      fetch(event.request, { cache: 'no-cache' }).catch(() => caches.match('./index.html'))
    );
    return;
  }

  // Autres ressources : Network First
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
