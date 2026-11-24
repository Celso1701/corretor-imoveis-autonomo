# Cor Sync Imóveis (PWA)

Aplicativo web para corretores de imóveis independentes cadastrarem e organizarem
imóveis, proprietários, agenda de visitas e finanças. Funciona no celular como app (PWA),
inclusive sem internet, e guarda os dados no próprio aparelho.

## Aplicativo publicado
👉 **https://app.corsyncimoveis.com.br**

## Como instalar no celular
- **Android (Chrome):** abra o link acima → menu ⋮ → "Instalar aplicativo" ou "Adicionar à tela inicial".
- **iPhone (Safari):** abra o link → botão Compartilhar → "Adicionar à Tela de Início".

## Versão atual: 1.49.0
- Modo **multiusuário "na nuvem"** opcional (Supabase), em **Ajustes**: a pergunta
  "Utiliza o app em modo multiusuário "na nuvem"?" começa em **NÃO** (tudo gravado no aparelho,
  com ou sem internet). Em **SIM**, a equipe compartilha os dados; sem internet, o app fica
  somente para leitura.
- Aviso de **"Registro em uso por outro usuário — aguarde"** e alerta para quem está com o
  registro aberto.
- Veja todos os detalhes e limites desta versão no `CHANGELOG.md`.

## Como publicar / atualizar (para o dono do repositório)
1. Suba os arquivos na raiz do repositório, branch `principal`:
   `index.html`, `manifest.json`, `sw.js`, `CHANGELOG.md`, os ícones
   (`icon-192.png`, `icon-512.png`, `icon-512-maskable.png`) e o `CNAME`.
2. Em **Settings → Pages**, confira: Branch `principal` / pasta `/ (root)` e o domínio
   personalizado `app.corsyncimoveis.com.br`.
3. A publicação leva de 1 a 2 minutos. Para conferir, abra o app e veja a versão
   em **Ajustes → Sobre** (e no selo no topo do Início).
4. Em novas versões, o número deve ser igual em três lugares: `APP_VERSION` no `index.html`,
   `CACHE_VERSION` no `sw.js` e `version` no `manifest.json`.

## Observações
- Por padrão, os dados (imóveis, proprietários, agenda, finanças, fotos) ficam salvos apenas
  no navegador do aparelho. Faça backup em **Ajustes → Backup**.
- No modo nuvem, os dados de texto são sincronizados com o projeto Supabase da própria empresa;
  fotos e vídeos continuam só no aparelho de quem os tirou.
- Busca de CEP e rotas (Waze/Google Maps) precisam de internet; o restante funciona offline.

## Direitos autorais
© 2026 Cor Sync Imóveis. Todos os direitos reservados. O aplicativo, seu código, sua marca,
seus textos e telas são protegidos por direitos autorais. É proibido copiar, reproduzir,
redistribuir ou fazer engenharia reversa sem autorização por escrito.

Consulte o `CHANGELOG.md` para o histórico de versões.
