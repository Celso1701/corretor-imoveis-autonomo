// Service Worker — Corretor de Imóveis
// Mesmo padrão do VetFlowCare: "network-first" (sempre busca a versão mais nova
// quando há internet; o cache só responde quando o aparelho está OFFLINE) e
// apaga sozinho os caches antigos ao ativar. Isso evita o problema clássico de
// PWA de ficar preso numa versão antiga (index.html, manifest.json ou ícones
// desatualizados) mesmo depois de você atualizar os arquivos no GitHub.
//
// IMPORTANTE: sempre que publicar uma atualização (novo index.html, manifest.json
// ou ícones), MUDE o número da versão abaixo (ex: 'v2' → 'v3'). É essa mudança de
// texto que faz o navegador perceber que o sw.js é diferente e instalar a nova
// versão — sem isso, ele pode continuar usando o service worker antigo.
const CACHE_VERSION = 'v1.18.0';
const CACHE_NAME = 'corretor-imoveis-' + CACHE_VERSION;

// Arquivos essenciais para o app abrir mesmo sem internet.
const PRECACHE_URLS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-512-maskable.png',
  './logo.jpg'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS)).catch(() => {})
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(
        names
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      )
    ).then(() => self.clients.claim())
  );
});

// Network-first: tenta buscar a versão mais nova na internet; se conseguir,
// atualiza o cache. Se não houver internet, usa o que estiver salvo no cache.
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy)).catch(() => {});
        return response;
      })
      .catch(() => caches.match(event.request).then((cached) => cached || caches.match('./index.html')))
  );
});
