// CARNET CRÉDIT — service worker
// Stratégie RÉSEAU D'ABORD : l'app est toujours à jour dès que le serveur change,
// et le cache sert seulement quand il n'y a pas de connexion (mode hors-ligne).
const VERSION = 'carnetcredit-v1';

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return; // jamais de cache pour les écritures
  e.respondWith((async () => {
    try {
      const res = await fetch(req);
      try {
        const cache = await caches.open(VERSION);
        cache.put(req, res.clone());
      } catch (err) { /* ignore */ }
      return res;
    } catch (err) {
      const cached = await caches.match(req);
      if (cached) return cached;
      throw err;
    }
  })());
});
