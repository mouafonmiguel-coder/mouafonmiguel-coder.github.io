const CACHE="cc-v49";
self.addEventListener("install",function(e){self.skipWaiting()});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(ks){return Promise.all(ks.filter(function(k){return k!==CACHE}).map(function(k){return caches.delete(k)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener("fetch",function(e){
  var u=new URL(e.request.url);
  if(u.origin!==location.origin||e.request.method!=="GET")return;
  if(e.request.mode==="navigate"){
    e.respondWith(fetch(e.request).then(function(r){var c=r.clone();caches.open(CACHE).then(function(x){x.put(e.request,c)});return r}).catch(function(){return caches.match(e.request)}));
    return;
  }
  e.respondWith(caches.match(e.request).then(function(hit){return hit||fetch(e.request).then(function(r){if(r&&r.status===200){var c=r.clone();caches.open(CACHE).then(function(x){x.put(e.request,c)})}return r})}));
});
