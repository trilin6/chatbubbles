self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('chat-cache').then(cache =>
      cache.addAll(['/', 'index.html', 'app.js'])
    )
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});
