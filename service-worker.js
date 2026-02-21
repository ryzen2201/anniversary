self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open("anniversary-cache").then(function(cache) {
      return cache.addAll([
        "index.html",
        "manifest.json",
        "music.mp3",
        "icon.png"
      ]);
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});