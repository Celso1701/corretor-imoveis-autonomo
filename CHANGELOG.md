# Corretor Imóveis Autônomo — Histórico de versões

## v1.17.0 — Financeiro em aberto na tela Início
- **Nova seção "Financeiro em aberto"** na tela Início, separada das visitas e logo acima de **Próximas visitas**. Mostra os títulos que ainda **não têm "Data realizada"** preenchida (mesma regra de "em aberto" da tela Financeiro), em dois grupos:
  - **⚠️ Atrasados** — tudo que já venceu (a pagar vencido e a receber não recebido), considerando a data de hoje. **Mostra todos**, sem limite, do mais antigo para o mais recente, com o aviso "venceu há X dias".
  - **📅 Próximos 3 dias** — a pagar e a receber de **hoje até hoje + 3 dias**, com "vence hoje", "vence amanhã" e "vence em X dias".
- **Cores iguais às do Financeiro:** receita em verde com `+ R$` e selo **A RECEBER**; despesa em vermelho com `- R$` e selo **A PAGAR**. Cada grupo traz o subtotal **A receber / A pagar**.
- **Toque no título** abre a mesma tela de edição do Financeiro — dá para preencher a "Data realizada" ali mesmo, e o item sai da lista na hora (o app volta para a tela Início, sem trocar de aba).
- Lançamentos **já realizados** e os que vencem **depois de 3 dias** não aparecem. Se não houver nada em aberto, a seção some por completo e a tela Início fica como antes.

## v1.16.0 — Câmera pelo método do VetFlowCare + ícone no <head>
- **Câmera corrigida de vez:** Câmera/Galeria em todas as telas (fotos do imóvel, proprietário, vídeo, certidões e foto/CRECI do corretor) passam a usar o mesmo método do VetFlowCare — o botão cria o seletor e abre na hora, **sem fechar a folha durante o toque**. Era o fechamento no meio do gesto que impedia a câmera de abrir no celular.
- **Ícone:** adicionadas as tags `<link rel="icon">` e `<link rel="apple-touch-icon">` no `<head>`, que faltavam — ajudam o Android e o iPhone a exibir o ícone do app.

## v1.15.0 — Câmera corrigida + campos por tipo (Apartamento e Terreno)
- **Câmera:** corrigido o "nada acontece" ao tocar em Câmera. O seletor de câmera/galeria agora abre de forma confiável em todas as telas (fotos do imóvel, foto do proprietário, vídeo, certidões e foto/CRECI do corretor). Correção: a folha fecha **antes** de acionar o seletor e o clique não "reabre" o slot da foto.
- **Apartamento:** novo botão **Portaria com vigia** (sim/não) após o portão eletrônico; **Poço caipira** removido das fontes de água (não se aplica a apartamento).
- **Terreno:** removidos os campos de garagem (vagas, coberta, disposição). Incluídos **Tipo do terreno** (Condomínio / Aberto sem portaria), **Acesso** (Portaria c/ vigia / Controle remoto / Aberto), **Ruas internas** (Terra cascalhada / Asfaltada), **Ruas com sarjetas** (sim/não) e **Iluminação nas ruas** (sim/não). A revisão e o texto de compartilhamento se ajustam ao tipo terreno.

## v1.14.0 — Compartilhar com fotos e vídeo + Desistir na edição
- **Compartilhar imóvel** agora envia as **fotos públicas preenchidas** (as vazias são ignoradas) e o **vídeo** — quando marcado para incluir no compartilhamento — junto com a descrição, pelo compartilhamento nativo do celular (WhatsApp, e-mail, etc.). Botão **"Só texto"** como alternativa. As mídias são pré-carregadas para funcionar também no iPhone.
- **Cadastro de imóvel:** ao **editar** um imóvel já existente e tocar em **Desistir/Descartar**, o app volta **direto para a lista de imóveis**.

## v1.13.0 — Zoom (acessibilidade), Becape e versão Pro
- **Acessibilidade — Zoom da tela:** em Ajustes, botões **A −** / **A +** ampliam o app inteiro (80%–170%), com "Voltar ao padrão". Fica salvo e vale para todas as telas.
- **Becape e proteção de dados:** em Ajustes, **Exportar backup** (arquivo único com os dados **e** as fotos/contratos/certidões) e **Importar backup** (restaura tudo ao trocar de celular). Aviso de "há X dias sem backup".
- **Versão Pro (senha-contra-senha):** o app mostra o **ID do aparelho** (AP-XXXX); com o **código de liberação** COR-XXXX-0000 (gerado na Central de Envio) o corretor ativa o Pro por **1, 6 ou 12 meses**. Uso único por aparelho; renovar = código novo. Botão "Assinar pelo WhatsApp" já leva o ID. **Nenhum recurso está travado ainda** (a definir) e o **portão de convite está desligado**.

## v1.12.1 — Navegação padronizada (Voltar no rodapé)
- Todas as telas de cadastro/detalhe passam a ter um **botão "Voltar" legível no rodapé** (barra fixa no assistente, na visita, no proprietário e no corretor; botão no fim da tela em "Tipo de imóvel", detalhe do imóvel e extrato).
- **Removido o botãozinho de voltar do canto superior esquerdo** de todas as telas (ficava pequeno e confundia).

## v1.12.0 — Câmera, navegação e identidade visual
- **Câmera corrigida:** o botão "Câmera" agora abre a câmera do aparelho de forma confiável (usa o mesmo método nativo da Galeria/Vídeo, sem perder o gesto do usuário). Corrigido em fotos do imóvel, foto do proprietário, certidões e foto/CRECI do corretor.
- **Navegação mais clara:** o botão de voltar do topo virou um botão azul destacado (maior e fácil de tocar) em todas as telas de cadastro/detalhe. A tela "Tipo de imóvel" ganhou também um botão "Voltar ao Início" na parte de baixo.
- **Novo logo (identidade visual):** aplicado no ícone do aplicativo (PWA), na tela de abertura (splash) e nas telas de senha (criar senha e login). App renomeado para "Corretor de Imóveis".

## v1.11.0 — Fonte pagadora nas receitas
- No lançamento de **receita**, novo campo **"Fonte pagadora"** (até 30 caracteres), logo abaixo da categoria.
- A fonte pagadora é **gravada** junto com a receita (novo e edição) e **volta preenchida** ao editar.
- Passa a aparecer nos relatórios onde a receita é listada: **lista do Financeiro (Mês/Todas)**, visão **Realizado** e **Extrato do imóvel**.
- O campo é exclusivo de receita — a despesa não o exibe.

## v1.10.1 — Correção na edição de imóveis
- **Editar imóvel agora carrega todos os dados já cadastrados** (endereço, número, complemento, bairro, cidade, UF, CEP, proprietário e contatos, características, garagem, água, energia, internet, exclusividade, condomínio, comissão e valores). Antes vários campos apareciam em branco ao editar.
- **Ao editar, o CEP não é mais buscado automaticamente** e não sobrescreve os dados existentes. Há um botão opcional "Buscar endereço pelo CEP" caso o corretor queira refazer a busca de propósito.
- Mantida a confirmação antes de salvar: **"Regravar / Desistir"**.

## v1.10.0
- **Reformulação visual (azul):** nova paleta azul aplicada a TODAS as telas (Início, Imóveis, Agenda, Proprietários, Financeiro, Ajustes).
- **Tela Início redesenhada:** cabeçalho azul com saudação e busca, botão grande "Cadastrar imóvel", grade de acesso rápido (Imóveis/Proprietários/Agenda/Financeiro) e cartões de "Próximas visitas" com WhatsApp e Rota.
- **Kit de ícones profissionais (traço):** emojis substituídos por ícones em botões e filtros das telas principais — Agenda (WhatsApp, Rota, Editar, Cancelar, Avaliação), Financeiro (título e filtros), Imóveis (Nome/CEP/Cidade), estados vazios e mais.
- Ajustes internos de contraste e consistência visual.

## v1.9.2 — Redução de imagens também na galeria
- Fotos escolhidas da **galeria** passam a ser reduzidas (máx. 1280 px, JPEG), igual à câmera — vale para foto do proprietário, fotos do imóvel, certidões (imagem) e dados do corretor.
- **Certidão em PDF continua sendo salva sem alteração** (só imagens são reduzidas). Vídeo e contrato também permanecem intactos.
- Objetivo: economizar espaço no aparelho e reduzir o risco de lotar a memória do app.

## v1.9.1 — Correção da câmera
- **Câmera agora usa o método do VetFlowCare**: abre a câmera nativa do próprio celular (seletor com `capture`), funcionando também offline (arquivo local), no iOS e no Android — sem depender de `getUserMedia`/HTTPS.
- As fotos passam a ser **reduzidas automaticamente** (máx. 1280 px, JPEG) antes de salvar, ocupando muito menos espaço no aparelho.
- Vale para todos os pontos com foto: proprietário, fotos do imóvel, certidões e dados do corretor.


## v1.9.0 (Bloco 3 + Item C)
- Cadastro de imóvel habilitado para os 4 tipos: Casa, Apartamento, Chácara/Sítio e Terreno,
  reaproveitando o mesmo wizard e mantendo a sequência de código (cs/ap/ch/tr + 5 dígitos).
- Características adaptadas por tipo (rótulos e campos): Terreno não pede construção/morador;
  cada tipo tem suas opções de "tipo" (ex.: Apartamento: Padrão/Cobertura/Duplex/Kitnet/Outro).
- Apartamento (Item C): após o tipo, botões Sim/Não para Piscina aquecida, Sauna, Churrasqueira,
  Parquinho e Academia, e campo Observações (máx. 30). Aparecem na revisão e no detalhe.
- Compartilhamento e detalhe passam a exibir o tipo do imóvel.

## v1.8.x
- Realizado com receitas+despesas; e-mail do corretor; CRECI/validade/e-mail no compartilhar;
  RG/CPF; certidões; Bloco 2.

## v1.7.0 e anteriores
- Câmera com fallback, relatórios com fim de semana/hoje, agenda semana, bairro, extrato.
