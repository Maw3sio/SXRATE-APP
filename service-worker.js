const CACHE = 'sxrate-v1';
self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll([
      './',
      './index.html',
      './manifest.json',
      './logo.png',
      './icon-512.png'
    ]))
  );
  self.skipWaiting();
});
self.addEventListener('fetch', evt => {
  evt.respondWith(caches.match(evt.request).then(r => r || fetch(evt.request)));
});
