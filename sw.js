// Garde l'app disponible même sans connexion.
const CACHE = 'majournee-v2';

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(['./', './index.html', './catalogue.js', './manifest.json'])));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(noms =>
    Promise.all(noms.filter(n => n !== CACHE).map(n => caches.delete(n)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request)
      .then(reponse => {
        const copie = reponse.clone();
        caches.open(CACHE).then(c => c.put(e.request, copie));
        return reponse;
      })
      .catch(() => caches.match(e.request).then(r => r || caches.match('./index.html')))
  );
});
