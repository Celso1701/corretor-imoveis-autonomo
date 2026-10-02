# RIZZIERI ONE — V:1.10.1

PWA "Life, Business & Projects" — central única para projetos, eventos, financeiro e vida pessoal em
quatro workspaces (Negócios, Eventos, Pessoal, Ideias).

## Estrutura deste repositório
```
index.html          página única do app
css/app.css          todo o estilo
js/app.js             toda a lógica
manifest.json        manifesto do PWA
sw.js                 service worker (cache offline básico)
assets/icons/         ícones do PWA
SECURITY.md           arquitetura de segurança necessária para uso em produção
```

## Como publicar no GitHub Pages
```
git init
git add .
git commit -m "RIZZIERI ONE V:1.10.1"
git remote add origin <seu-repositorio>
git push -u origin main
```
Em Settings → Pages, escolha a branch `main` e a pasta raiz (`/`).

## Novidades desta versão
Duplicar evento, compartilhar via WhatsApp (evento/checklist/cronograma/convidados), lista de
convidados com status e busca, mapa de mesas (arrastar ou menu), e portal do cliente (retrato
exportável em .html, sem dados financeiros).

## Dados
O app guarda tudo em `localStorage` do navegador. Use **Ajustes → Ajuda → Baixar backup (.json)**, dentro
do próprio app, antes de trocar de navegador/aparelho ou de atualizar os arquivos.
