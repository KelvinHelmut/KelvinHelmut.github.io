!function(){"use strict";const e=["client/me.6da87f02.js","client/index.ff7bd4a9.js","client/about.073596ea.js","client/index.3fba8199.js","client/[slug].48ede919.js","client/index.bea504a0.js","client/client.3e691266.js"].concat(["service-worker-index.html","CV.pdf","favicon.png","global.css","images/code.jpg","images/foto-mobile.jpg","images/foto.jpg","images/maths.jpg","logo-192.png","logo-512.png","main.css","manifest.json","tailwind.css"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1592485782030").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1592485782030"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1592485782030").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const n=await t.match(e.request);if(n)return n;throw s}}))))})}();
