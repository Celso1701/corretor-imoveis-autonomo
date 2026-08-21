# Corretor Imóveis Autônomo — Histórico de versões

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
