// ChronoClass — service worker (réseau d'abord, cache en secours)
const VERSION='chronoclass-v1';
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>{
  e.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(k=>k!==VERSION).map(k=>caches.delete(k)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch',e=>{
  const req=e.request;
  if(req.method!=='GET')return;
  e.respondWith((async()=>{
    try{
      const res=await fetch(req);
      const c=await caches.open(VERSION);
      c.put(req,res.clone());
      return res;
    }catch(err){
      const hit=await caches.match(req);
      if(hit)return hit;
      throw err;
    }
  })());
});
