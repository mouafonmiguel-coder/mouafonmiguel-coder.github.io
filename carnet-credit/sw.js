// Service Worker Carnet Credit v87 - 100% Offline-First (Cache-First)
const CACHE_NAME = 'cc-offline-v87';
const CORE_ASSETS = [
  './',
  './index.html',
  './index-G0iod3r_.js',
  './index-CZLuv8pD.css',
  './manifest.webmanifest',
  './version.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CORE_ASSETS).catch(err => {
        console.warn('Cache install warning:', err);
      });
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((k) => k !== CACHE_NAME).map((k) => {
          console.log('SW: Suppressing old cache', k);
          return caches.delete(k);
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Cache-First strategy: Respond IMMEDIATELY from cache (0ms, 100% offline), update in background when online
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // 1. If found in cache, return IMMEDIATELY (0ms, 100% offline)
      if (cachedResponse) {
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

      // 2. Fallback for navigation requests (opening the app from URL / bookmark / home screen)
      if (event.request.mode === 'navigate' || event.request.destination === 'document') {
        return caches.match('./index.html')
          .then(res => res || caches.match('./'))
          .then(res => res || caches.match('index.html'))
          .then(res => res || fetch(event.request));
      }

      // 3. Not in cache yet: fetch from network and cache
      return fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return networkResponse;
        })
        .catch(() => {
          return new Response('Mode hors-ligne actif', {
            status: 200,
            headers: { 'Content-Type': 'text/plain; charset=utf-8' }
          });
        });
    })
  );
});
