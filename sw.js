// Service Worker — Cor Sync Imóveis
// "Rede primeiro, cache de reserva": com internet, sempre busca a versão mais nova; sem internet
// (ou com internet muito lenta) o app abre pelo que está guardado no cache. Os caches antigos são
// apagados sozinhos ao ativar, para o app nunca ficar preso numa versão velha.
//
// IMPORTANTE: a cada publicação (novo index.html, manifest.json ou ícones) MUDE o número da versão abaixo.
// É essa mudança de texto que faz o navegador instalar o novo service worker.
const CACHE_VERSION = 'v1.48.3';
const CACHE_NAME = 'corretor-imoveis-' + CACHE_VERSION;
const ESPERA_REDE_MS = 4000;   // internet lenta: depois disso, abre pelo cache

// Arquivos essenciais para o app abrir mesmo sem internet (todos existem no repositório).
const PRECACHE_URLS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-512-maskable.png'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  // Guarda cada arquivo separadamente: se um falhar, os outros continuam sendo guardados.
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      Promise.all(PRECACHE_URLS.map((u) => cache.add(u).catch(() => {})))
    )
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;   // consulta de CEP etc.: o navegador cuida

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const guardado = (await cache.match(req)) ||
      (req.mode === 'navigate' ? (await cache.match('./index.html')) || (await cache.match('./')) : undefined);

    const rede = fetch(req).then((resp) => {
      // só guarda respostas boas do próprio site (nunca páginas de erro)
      if (resp && resp.ok && resp.type === 'basic') cache.put(req, resp.clone()).catch(() => {});
      return resp;
    });

    if (!guardado) return rede.catch(() => Response.error());
    return Promise.race([
      rede.catch(() => guardado),
      new Promise((res) => setTimeout(() => res(guardado), ESPERA_REDE_MS))
    ]);
  })());
});
