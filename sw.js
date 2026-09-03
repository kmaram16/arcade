// Offline service worker for the whole arcade (scope: this folder and below, i.e.
// the launcher AND every game under /<id>/). Strategy:
//   - navigations (HTML): network-first, fall back to cache when offline
//   - other same-origin GETs (JS/CSS/assets): cache-first (hashed, immutable)
// So once you've opened the arcade (and a game) online once, it plays with no wifi.

const CACHE = 'kmm-arcade-v2';

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)));
      await self.clients.claim();
    })()
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // let the broker / fonts pass through

  const isNav = req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html');

  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE);
      if (isNav) {
        // Network-first so online visitors always get the latest page.
        try {
          const res = await fetch(req);
          if (res && res.ok) cache.put(req, res.clone());
          return res;
        } catch {
          const cached = await cache.match(req);
          if (cached) return cached;
          const shell = await cache.match('./') || await cache.match('index.html');
          if (shell) return shell;
          return new Response('Sin conexión', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
        }
      }
      // Assets: cache-first (fast + offline), refreshed in the background.
      const cached = await cache.match(req);
      if (cached) {
        fetch(req).then((res) => {
          if (res && res.ok) cache.put(req, res.clone());
        }).catch(() => {});
        return cached;
      }
      try {
        const res = await fetch(req);
        if (res && res.ok && res.type === 'basic') cache.put(req, res.clone());
        return res;
      } catch {
        return new Response('', { status: 504 });
      }
    })()
  );
});
