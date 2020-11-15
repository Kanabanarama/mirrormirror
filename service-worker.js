self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('mirrormirror').then(function(cache)
    {
      return cache.addAll([
        '/',
        '/manifest.webmanifest',
        '/index.html',
        '/app.*.js',
        '/static/styles/main.css',
        '/static/gfx/icon-192x192.png',
        '/static/gfx/icon-maskable-192x192.png',
        '/static/gfx/splash-screen-512x512.png'
      ])
    })
  )
})

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open('mirrormirror')
      .then((cache) => {
        return cache.match(event.request)
          .then((response) => {
            return response || fetch(event.request)
          })
      })
  )
})

self.addEventListener('activate', function(event) {
  event.waitUntil(
     caches.keys()
       .then((keyList) => {
         return Promise.all(keyList.map((key) => {
           if (key !== 'mirrormirror') {
             console.log('[ServiceWorker] Removing old cache', key)
             return caches.delete(key)
           }
         }))
       })
       .then(() => self.clients.claim())
   )
})
