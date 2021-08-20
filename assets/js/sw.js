const VERSION = "V3";

self.addEventListener("install", event => {
    event.waitUntil(precache());
});

self.addEventListener("fetch", event => {
    const request = event.request;
    console.log('request: ', request);
    if (request.method === "GET"){
        event.respondWith(cachedResponse(request,event));
        event.waitUntil(updateCache(request, event));
    }
});

async function precache() {
    const cache = await caches.open(VERSION);
    return cache.addAll([
        // '/',
        // '/index.html',
        // '/assets/js/index.js',
        // '/assets/js/MediaPlayer.js',
        // '/assets/plugins/AutoPlay.js',
        // '/assets/plugins/AutoPause.ts',
        // '/assets/css/index.css',
        // '/assets/media/video/BigBuckBunny.mp4',
        // '/assets/js/sw.js',
    ]);
}

async function cachedResponse(request, event) {
    const cache  = await caches.open(VERSION);
    const response = await cache.match(request);
    if (response) {
        // Si encontramos una coincidencia en el cache, lo devuelve, pero también
        // actualizar la entrada en el cache en segundo plano.
        event.waitUntil(cache.add(request));
        return response;
      }
    return fetch(request);
}

async function updateCache(request, event) {
    const cache  = await caches.open(VERSION);
    const response = await fetch(request);
    cache.put(response);
}