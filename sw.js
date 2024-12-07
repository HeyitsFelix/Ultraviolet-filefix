/*global UVServiceWorker,__uv$config*/
/*
 * Stock service worker script.
 * Users can provide their own sw.js if they need to extend the functionality of the service worker.
 * Ideally, this will be registered under the scope in uv.config.js so it will not need to be modified.
 * However, if a user changes the location of uv.bundle.js/uv.config.js or sw.js is not relative to them, they will need to modify this script locally.
 */
importScripts('https://cdn.jsdelivr.net/npm/@titaniumnetwork-dev/ultraviolet@3.2.10/dist/uv.bundle.js');
importScripts('https://cdn.jsdelivr.net/gh/HeyitsFelix/Ultraviolet-filefix@8d807ef6be812b51423cf91bd2a94d6d12196868/uv.config.js');
importScripts(__uv$config.sw || 'https://cdn.jsdelivr.net/gh/HeyitsFelix/Ultraviolet-filefix@91234072ade29accd59192e9df5f775334348a58/uv.sw.js');

const uv = new UVServiceWorker();

async function handleRequest(event) {
    if (uv.route(event)) {
        return await uv.fetch(event);
    }
    
    return await fetch(event.request)
}

self.addEventListener('fetch', (event) => {
    event.respondWith(handleRequest(event));
});
