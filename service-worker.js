!function(){"use strict";const e=["client/me.6da87f02.js","client/index.ff7bd4a9.js","client/index.20024386.js","client/education.d1947f67.js","client/about.1d9dc449.js","client/[slug].0af5021e.js","client/index.dcad6e2e.js","client/client.addefcbb.js"].concat(["service-worker-index.html","CV.pdf","favicon.png","global.css","google1272b7b102bfc6b6.html","images/certificados/Cloud computing.jpg","images/certificados/Coursera W5Y25Q7GVVKB.jpg","images/certificados/Coursera XP73L8MVSYLE.jpg","images/certificados/Deeplearning pytorch.jpg","images/certificados/introduction-to-flutter-development.jpg","images/certificados/machine learning.png","images/certificados/mineria de datos.png","images/foto-mobile.jpg","images/foto.jpg","images/ulasalle.png","images/unitek.jpeg","logo-192.png","logo-512.png","main.css","manifest.json","tailwind.css"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1596128916272").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1596128916272"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1596128916272").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const i=await t.match(e.request);if(i)return i;throw s}}))))})}();
