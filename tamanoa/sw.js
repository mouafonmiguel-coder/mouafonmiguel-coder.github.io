// TAMANOA EXPRESS (Coursier 237) - High-Resilience Service Worker
// Version: 2.42.0 (Ultra-Fast Offline & Low-Bandwidth Support)

const CACHE_NAME = 'tamanoa-v42';
const ASSETS_TO_CACHE = [
  './',
  'index.html',
  'manifest.webmanifest',
  'icon-192.png',
  'icon-512.png',
  'version.json'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE).catch(err => {
        console.warn('SW: Cache install warning', err);
      });
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => {
          console.log('SW: Purging old cache', key);
          return caches.delete(key);
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Helper: fetch with strict timeout (1500ms) for low-bandwidth resilience
function timeoutFetch(request, timeoutMs = 1500) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error('Network timeout'));
    }, timeoutMs);

    fetch(request)
      .then((response) => {
        clearTimeout(timer);
        resolve(response);
      })
      .catch((err) => {
        clearTimeout(timer);
        reject(err);
      });
  });
}

// Fetch handler: Fast network-first with instant cache fallback
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // For app shell and core resources: try network with 1.5s timeout, fallback to cache immediately
  if (url.origin === location.origin) {
    event.respondWith(
      timeoutFetch(event.request, 1500)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return networkResponse;
        })
        .catch(() => {
          // Network failed or timed out: serve from cache
          return caches.match(event.request).then((cached) => {
            if (cached) return cached;
            if (event.request.mode === 'navigate') {
              return caches.match('./') || caches.match('index.html');
            }
            return new Response('Connexion instable. Mode hors-ligne activé.', {
              status: 503,
              headers: { 'Content-Type': 'text/plain; charset=utf-8' }
            });
          });
        })
    );
    return;
  }

  // For external resources (Leaflet, OSM tiles, etc.): Stale-While-Revalidate
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200 && event.request.method === 'GET') {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(() => cachedResponse);

      return cachedResponse || fetchPromise;
    })
  );
});
