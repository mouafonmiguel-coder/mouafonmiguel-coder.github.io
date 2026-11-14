// TAMANOA EXPRESS (Coursier 237) - True Offline-First Service Worker
// Version: 2.43.0 (Zero-Data Offline Execution)

const CACHE_NAME = 'tamanoa-offline-v45';
const OFFLINE_ASSETS = [
  './',
  'index.html',
  'manifest.webmanifest',
  'icon-192.png',
  'icon-512.png',
  'version.json',
  'TamanoaExpress.apk'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(OFFLINE_ASSETS).catch(err => {
        console.warn('Cache install warning:', err);
      });
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => {
          console.log('SW: Suppressing old cache', key);
          return caches.delete(key);
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Cache-First strategy: Respond IMMEDIATELY from cache (0ms, 100% offline), update cache in background when online
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // 1. If found in cache, return IMMEDIATELY (0ms, 100% offline)
      if (cachedResponse) {
        // Silently update cache in background if online (stale-while-revalidate)
        if (navigator.onLine) {
          fetch(event.request)
            .then((networkResponse) => {
              if (networkResponse && networkResponse.status === 200) {
                const clone = networkResponse.clone();
                caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
              }
            })
            .catch(() => {});
        }
        return cachedResponse;
      }

      // 2. Not in cache yet (first time visit): fetch from network and cache
      return fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return networkResponse;
        })
        .catch(() => {
          // If offline and navigate mode, fallback to cached index.html
          if (event.request.mode === 'navigate') {
            return caches.match('./') || caches.match('index.html');
          }
          return new Response('Mode hors-ligne actif', {
            status: 200,
            headers: { 'Content-Type': 'text/plain; charset=utf-8' }
          });
        });
    })
  );
});
