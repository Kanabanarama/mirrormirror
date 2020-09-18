self.addEventListener('install', function (event) {
  console.log('service worker: cache data')
})

self.addEventListener('fetch', function (event) {
  console.log('service worker: intercept request to provide cached data')
})

self.addEventListener('activate', function (event) {
  console.log('service worker: activate')
})
