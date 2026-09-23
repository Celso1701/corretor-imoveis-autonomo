# Cor Sync Imóveis — Histórico de versões

## v1.47.1 — Cartão de crédito nas despesas
- **Dados do corretor:** novo campo **"Dia do vencimento do cartão de crédito"** (1 a 31, opcional), logo após a Validade da carteira CRECI.
- **Nova/Editar despesa:** botão **Pagamento: À vista / Cartão de crédito**, na mesma linha.
  - **À vista** preenche Data e Data realizada com o dia de hoje (continua editável).
  - **Cartão de crédito** calcula a Data automaticamente a partir do dia de vencimento cadastrado: se hoje ainda não chegou no dia do vencimento, usa o vencimento deste mês; se já chegou ou passou, usa o vencimento do mês seguinte. Só a Data é preenchida — Data realizada não é alterada.
- **Financeiro:** o resumo com o gráfico agora mostra também o **total pago no cartão de crédito** no período.

## v1.47.0 — Ajustes de tela inicial e Financeiro
- **Marca d'água retirada** das telas azuis (abertura, login, senha do Pro, teste grátis vencido) — ficaram só o logo e os textos.
- **Botão Financeiro** movido: agora fica depois dos 4 botões de Ferramentas (Financiamento, Follow-up, Produtividade, Catálogo), não mais junto com Imóveis/Proprietários/Agenda/Compradores.
- **Tela do Financeiro:** o resumo (Receitas/Despesas/Saldo + gráfico por categoria) agora fica **fixo no topo**; só a lista de lançamentos rola por baixo.

## v1.46.0 — Regras do teste grátis, proteção do backup e padronizações
- **Teste grátis, ao vencer:** por **1 dia** após o vencimento, o app libera só **Agenda, Financeiro e Ajustes** para consulta (nada pode ser incluído/alterado). Depois desse 1 dia, o app **não abre mais** — mostra só uma tela com o **ID do aparelho** e o campo para digitar o código do Pro (ou assinar pelo WhatsApp).
- **Proteção do backup:** ao restaurar um backup, a **licença Pro nunca é copiada** junto — ela é sempre removida por segurança. Se o backup for de **outro aparelho**, aparece um aviso específico.
- **Campo WhatsApp padronizado:** os campos de WhatsApp (Dados do corretor, dados obrigatórios do Pro, guardar senha) agora usam a mesma máscara `(99)99999.9999` dos outros telefones do app.
- **Botões "Cancelar"/"Agora não" unificados:** todas as telas de senha e assinatura agora usam sempre **"Cancelar"**.
- **Correções encontradas na auditoria:** janelas de confirmação/senha que ficavam escondidas atrás das telas de login (bug de sobreposição), e o checklist de regras da senha que era quase invisível em fundo branco — ambos corrigidos.

## v1.45.0 — Marcas d'água nos botões do início
- Cada botão do início ganhou uma **figura em marca d'água** (bem clara, atrás do texto): 🏠 Imóveis, 👥 Proprietários, 🤝 Compradores, 💰 Financeiro, 🏦 Financiamento, 📞 Follow-up, 📈 Produtividade, 📚 Catálogo.
- O botão **Agenda** mostra a **data atual** (dia e mês) como marca d'água.

## v1.44.3 — Proposta inteligente, compradores e preenchimento em ordem
- **Mensagens padrão (Ajustes):** limite de 50 caracteres em cada texto.
- **Gerar proposta:** o **valor das parcelas é calculado sozinho** (proposta − sinal − entrada ÷ nº de parcelas); campo de Observações com o novo texto de exemplo.
- **Nome do cliente (proposta):** busca por **fragmento do nome ou do telefone** entre os compradores das visitas; se não existir, é só digitar para incluir.
- **Enviar proposta:** opção **Sim/Não** para incluir a **carteira CRECI**, que vai como **1ª imagem** (mesma rotina do compartilhar imóvel). A carteira agora vai em 1º também no compartilhar do imóvel.
- **Compradores (novo botão na tela inicial, antes do Financeiro):** lista os compradores cadastrados nas visitas (nome + telefones), com WhatsApp e ligar.
- **Preenchimento em ordem:** nas **fotos** (públicas e privativas) e nos campos **Outros** do financeiro, só libera o próximo depois de preencher o anterior (1, 2, 3…).
- **Consulta ideal:** campos **de / até** (faixa de investimento) destacados em verde.

> Observação: a carteira CRECI só pode ser anexada no envio **"Compartilhar com fotos"**. Pelo link do WhatsApp ou por e-mail (mailto) vai apenas o texto — anexos não são possíveis por esses caminhos.

## v1.44.2 — Mensagens padrão, proposta com parcelas e simulador
- **Ajustes › Mensagens** (novo, entre Corretor e Acessibilidade): textos padrão editáveis de **mensagem ao comprador** (confirmar a visita) e **mensagem ao proprietário**.
- **WhatsApp da visita:** ao abrir a conversa, já vem a mensagem padrão ao comprador.
- **Gerar proposta:** **Condição de pagamento** agora vem acima do **Valor da proposta**; abaixo dele, novos campos **Valor de sinal, Entrada, Nº de parcelas, Valor das parcelas** e opção **Fixas / Corrigidas por** (índice). O cabeçalho mostra também o **Valor mínimo** do cadastro.
- **Enviar proposta:** nova tela para enviar direto ao **WhatsApp ou e-mail do proprietário** (ou compartilhar com fotos), já com a mensagem padrão ao proprietário.
- **Simulador de financiamento:** dá para **escolher um imóvel cadastrado** e preencher o valor automaticamente.
- **Ajustes › Sobre** e **tutorial:** aviso de que busca de CEP e rotas (Waze/Google Maps) precisam de internet; o restante funciona offline.

## v1.44.1 — Botões do cadastro, PDF do catálogo e recurso de PDF
- **Cadastro de imóvel (todos os tipos):** rodapé com **Voltar · Gravar · Avançar · Sair**. Ao sair, voltar ou avançar, o app **só pergunta se quer gravar quando você estiver editando um imóvel e tiver alterado algum campo** — se não mexeu em nada, passa direto.
- **Catálogo:** agora dá para **enviar o catálogo em PDF (arquivo) pelo WhatsApp ou e-mail** (com foto, dados e valor de cada imóvel), além da lista em texto e do imprimir/salvar.
- **Recurso de PDF:** o gerador de PDF já vem embutido no app. Na abertura ele verifica o recurso e, se algum dia faltar, avisa que é preciso instalar o recurso de PDF para exportar relatórios.
- **Ajustes › Ajuda:** após "Suporte e dúvidas", uma linha informa se a exportação em PDF está disponível (e, se faltar, orienta a instalar o recurso).

## v1.44.0 — Cores, catálogo por WhatsApp/e-mail e mais
- **Próximas visitas:** destaque por data — **hoje** em amarelo claro e os **próximos 3 dias** em verde claro.
- **Financeiro em aberto:** **vencidos** em vermelho claro e **vence hoje** em amarelo claro.
- **Casa:** abaixo de Lavanderia, novos campos **Lavanderia interna** e **Lavanderia externa** (Sim/Não).
- **Catálogo/vitrine:** depois de selecionar os imóveis, abre a tela para **enviar por WhatsApp, e-mail ou gerar PDF** (como no Compartilhar do imóvel).
- **Consulta ideal:** os resultados agora mostram a **1ª foto pública** de cada imóvel (como na lista de imóveis).
- **Fotos:** não é mais permitido incluir as fotos públicas 2 a 6 enquanto a **Foto 1 (principal)** estiver vazia (as demais aparecem bloqueadas com "🔒 Foto 1 primeiro").

## v1.43.0 — Ferramentas: financiamento, follow-up, catálogo e produtividade
Nova seção **Ferramentas** na tela inicial:
- **Simulador de financiamento:** valor, entrada, prazo e juros → parcelas nos sistemas **PRICE** (fixa) e **SAC** (decrescente), com total pago e total de juros.
- **Follow-up (retornos):** agende retornos por cliente/assunto e data; o app **avisa** quando chega o dia (pendentes, atrasados e concluídos).
- **Catálogo / vitrine em PDF:** selecione vários imóveis e gere um **PDF** com foto, dados e valor de cada um (ótimo para enviar ao cliente). Também acessível pelo botão **📚 Catálogo** na lista de imóveis.
- **Produtividade:** defina uma **meta de vendas** e acompanhe o progresso, além de KPIs da carteira (disponíveis/reservados/vendidos), visitas no mês, propostas e fechados.
- Extras visuais desta leva: campos de **data inicial/final** em verde claro; **data realizada** verde (receita)/vermelho (despesa); **botão Voltar** cinza‑azulado e **botões +Novo/Incluir** em verde claro em todo o app.

## v1.42.2 — Ajustes de cadastro, financeiro e segurança
- **Terreno:** "Ruas com sarjetas" e "Iluminação nas ruas" agora ficam logo **abaixo de Ruas internas** (saíram da seção de água/energia).
- **Casa:** quando o tipo é **Sobrado**, o botão passa a ser **"Quarto com sacada"** (nos demais, "Sala com sacada"). Novos campos **"Casa germinada"** e **"Tem corredor"**.
- **Cadastro do proprietário:** ao adicionar um proprietário durante o cadastro do imóvel, o app **volta para a etapa Proprietário** (antes voltava para Características).
- **Financeiro:** a aba **"Semana"** virou um botão dentro do **"Fluxo em aberto"** (antes "Fluxo diário em aberto"); ordem dos botões: **Hoje · Semana · Este mês**.
- **Segurança:** a seção agora informa as **regras da senha** (mínimo 4 caracteres, com 1 maiúscula, 1 minúscula, 1 número e 1 caractere especial).

## v1.42.1 — Funil do cliente e lembretes de visita
- **Funil do cliente:** cada cliente tem um **estágio** (Novo → Qualificado → Visitou → Proposta → Fechado). Em "Meus clientes" há um **resumo por estágio** e botões para **mover no funil** direto no card. O estágio também aparece no cadastro do cliente.
- **Lembrete de visita:** ao agendar/editar uma visita, escolha **quando ser avisado** (30 min, 1 h, 3 h ou 1 dia antes, ou não lembrar). O app dispara uma **notificação** na hora do lembrete (com o app aberto; em iPhone a notificação com o app fechado é limitada).

## v1.42.0 — Status do imóvel, ficha PDF e clientes
- **Status do imóvel:** cada imóvel agora tem **Disponível / Reservado / Vendido** (seletor no detalhe), **selo colorido** no card da lista e um **filtro** por situação na lista.
- **Ficha do imóvel em PDF:** botão **"Gerar ficha (PDF)"** no detalhe — monta uma página com fotos, dados públicos, valor e a carteira CRECI para salvar/enviar como PDF.
- **Clientes (perfil + faixa de investimento):** a **Consulta ideal** agora permite **salvar o cliente** (nome, tipo, cidade, quartos e faixa de valor). Nova tela **"Meus clientes"** para consultar, buscar imóveis que combinam, editar e excluir.
- **Cadastro:** na Garagem/infra, **Acesso** vem antes de **Segurança interna / Monitorado por câmera**.

## v1.41.0 — Senha: correção, WhatsApp automático e destaque
- **Correção importante:** o botão "Criar senha"/"Salvar" agora é **sempre clicável** e mostra na hora o que falta (regras da senha ou confirmação), em vez de parecer travado. Isso resolve o caso em que a senha não era criada e o app não pedia senha ao reabrir.
- **Senha no WhatsApp automática:** ao **criar** ou **alterar** a senha, o app envia a cópia **direto para o WhatsApp cadastrado** em Dados do corretor (Seu WhatsApp) e mostra o aviso **"Cópia da senha encaminhada ao seu WhatsApp"**. Se ainda não houver número cadastrado, ele pergunta.
- **Regras da senha visíveis:** caixa destacando que a senha precisa de **10+ caracteres, 1 maiúscula, 1 minúscula, 1 número e 1 símbolo** (ao criar e ao alterar).
- **Destaque:** o botão **"Exigir senha ao abrir"** agora aparece em **amarelo claro**.

## v1.40.2 — Diagnóstico da senha
- **Segurança e login:** agora mostra um indicador se a **criptografia está disponível** no aparelho (✓) ou não (⚠️), e avisa de forma clara caso a senha não consiga ser salva. Ajuda a diagnosticar por que a senha não ativa em alguns contextos.

## v1.40.1 — Proposta com anexos e ajuste da senha
- **Gerar proposta:** agora anexa automaticamente a **carteira CRECI** + as **2 primeiras fotos públicas** e traz mais dados do imóvel (**área, tipo, cômodos, lazer, condomínio quando preenchido**), além do valor anunciado e dados da proposta. Não leva: venda exclusiva, comissão, valor mínimo/negociado nem dados do proprietário.
- **Senha (mensagem):** quando a criptografia não estiver disponível (app aberto fora de HTTPS), o app agora avisa de forma clara que a senha só funciona por **https** ou com o app **instalado na tela inicial**.

## v1.40.0 — Segurança (senha) e compartilhar
- **Segurança e login (Ajustes):** seção real, logo abaixo do backup — **habilitar senha** (quando o corretor escolheu "sem senha"), **Alterar senha** e **remover** (desligar o toggle, pedindo a senha atual). Criptografia AES‑256.
- **Senha no WhatsApp:** ao **criar** (1º acesso) e ao **alterar** a senha, o app abre o WhatsApp do corretor com a senha para ele guardar — recuperação caso esqueça (a senha não fica salva em lugar nenhum).
- **Dados do corretor:** novo campo **Seu WhatsApp** (destino da senha).
- **Compartilhar:** carteira **CRECI** em **retângulo azul** (destaque); texto agora mostra o **Valor** e não leva valor mínimo/negociado, comissão, dados do proprietário, certidões nem mídia (fotos/vídeo seguem pelo botão "Com fotos").

## v1.39.1 — Ajustes de layout e barras de rolagem
- **Características:** a **Sacada** virou **"Sala com sacada"** e foi para **abaixo dos Quartos simples** (casa e apartamento).
- **Lazer:** posições trocadas — **Furô · Sauna** em cima, **Academia · Churrasqueira** embaixo.
- **Etapa 6:** "Origem da captação" renomeada para **"Onde captou este imóvel para venda"**.
- **Barras de rolagem:** indicador **dinâmico** em todas as barras roláveis — **›** à direita quando há mais conteúdo e **‹** à esquerda quando já rolou; some conforme chega ao início/fim. Barra de rolagem fininha visível.

## v1.39.0 — Botões do detalhe, proposta independente e ajustes de 100%
- **Detalhe do imóvel:** nova ordem dos botões — **Editar · Incluir imóvel · Compartilhar · Gerar proposta · Extrato · Voltar · Excluir**.
- **Gerar proposta** virou botão **independente** (saiu de dentro do Compartilhar).
- **Compartilhar:** a **carteira CRECI** vai por último (a pedido).
- **Zoom 100%:** ajuste de layout — a **Fonte** (Sabesp / Poço artesiano / Poço caipira) ocupa a linha inteira, sem empilhar.
- **Lista de imóveis:** as duas linhas de botões (busca e filtro por tipo) ganharam **barra de rolagem visível + degradê e seta ›**, indicando que há mais botões à direita.

## v1.38.1 — Correção do zoom (padrão 100%)
- O app volta a **abrir em 100%** (a v1.38.0 tinha ficado em 80%). O corretor ainda pode ajustar quando quiser.
- No **primeiro acesso**, o tutorial avisa **onde alterar** o tamanho da tela (Ajustes → Acessibilidade → Tamanho da tela).

## v1.38.1 — Correção do zoom (acessibilidade)
- **Tamanho da tela (zoom)** volta ao padrão **100%** (antes vinha 80%).
- No **primeiro acesso**, o tutorial abre com o aviso **"Tamanho da letra"** informando que o app abre em 100% e **onde alterar** (Ajustes → Acessibilidade → Tamanho da tela).

## v1.38.0 — Consulta ideal, proposta, origem da captação e mais
- **Consulta ideal (busca cruzada):** botão na tela inicial — informe o que o cliente procura (tipo, cidade, faixa de preço, quartos) e veja os imóveis da carteira que combinam.
- **Gerar proposta:** botão no compartilhar — monta uma proposta pronta (cliente, valor, condição, validade, observações) para enviar.
- **Origem da captação:** campo na etapa 6 (Placa/Indicação/Imobiliária/Instagram/Outros — com "Outros" digitável até 25) + chip **Tipo de captação** na lista, com resumo totalizado por origem.
- **Parecer da visita:** campo de observações sobre o cliente, junto da avaliação de interesse (aparece na visita).
- **Sacada** (casa/apto), **Segurança interna + Monitorado por câmera** já no texto compartilhado; **texto de compartilhamento enriquecido** por tipo.
- **Coberta** na mesma linha da vaga; **Energia + Complemento** alinhados; **Comissão** na mesma linha da Venda exclusiva.
- **Filtro por tipo** na lista; **acessibilidade abre em 80%** + slide no tutorial.
- **Compartilhar:** "Compartilhar com fotos" como principal; WhatsApp/E-mail marcados como "só texto".
- **Visita:** foto 1 + tipo + endereço ao escolher o imóvel; **Data realizada** com botão "Limpar".
- Botão **Editar** da agenda em laranja.

## v1.37.0 — Navegação (Voltar), visitas editáveis e financeiro
- **Compartilhar:** o WhatsApp por link só leva texto (limitação do WhatsApp). Agora **Compartilhar com fotos** é o botão principal (envia as imagens via lista do sistema) e **WhatsApp/E-mail** ficam marcados como **só texto**, com aviso.
- **Agenda:** botão **Voltar**.
- **Próximas visitas:** tocar numa visita **abre direto para edição** (edita e regrava).
- **Extrato do imóvel:** botão **Voltar** (retorna ao imóvel).
- **Traçar rota:** botão em **azul bem claro** com destaque.
- **Financeiro:** nova ordem das abas — **Por mês · Semana · Fluxo diário · Realizado · Todas**; botão **Voltar**; e ao **tocar num dia** abre uma tela com **todos os lançamentos daquele dia** (mesmas cores de receita/despesa) e **Voltar** para a tela anterior.

## v1.36.0 — Segurança (todos os tipos) + Acesso/Ruas no sítio
- **Segurança:** abaixo do **Portão eletrônico**, novos botões **Segurança interna** (Sim/Não) e **Monitorado por câmera** (Sim/Não), em todos os tipos (apartamento, casa, sítio/chácara e terreno).
- **Sítio/chácara:** passou a ter também **Acesso** (Portaria c/ vigia · Controle remoto · Aberto) e **Ruas internas** (Terra cascalhada · Asfaltada), como no terreno — no cadastro e na edição.

## v1.35.0 — Cálculo da área do lote (terreno e chácara)
- **Ordem:** na etapa Características, as medidas **Frente / Fundos / Lado esquerdo / Lado direito** agora vêm **antes** de **Área total** (e Construção, na chácara).
- **Campos opcionais:** as medidas podem ficar em branco.
- **Cálculo automático:** ao preencher as medidas, a **Área total** é calculada sozinha — média das frentes × média das laterais ((frente+fundos)/2 × (lado esq.+lado dir.)/2). Se faltar fundos ou lado direito, usa o valor do lado oposto (funciona também para lote retangular).
- **Editável:** a Área total continua podendo ser digitada/corrigida à mão.

## v1.34.1 — Botões do detalhe no topo (confirmação)
- Reempacotamento da v1.34.0 com o número de versão solicitado. Os botões **Editar · Compartilhar · Extrato · Excluir · Voltar · Incluir imóvel** já aparecem no **topo** da tela de detalhe do imóvel, no mesmo formato. Conteúdo idêntico ao da v1.34.0.

## v1.34.0 — Layout da etapa de infraestrutura, compartilhar e detalhe
- **Garagem e infraestrutura:** **Portão eletrônico** e **Portaria com vigia** na mesma linha (todos os tipos); **Fonte** e **Situação da água** na mesma linha; **Energia elétrica** com campo **Complemento** (20 caracteres: solar, eólica…) ao lado.
- **Terreno:** a lista **Acesso** mantém as três opções (Portaria c/ vigia · Controle remoto · Aberto).
- **Compartilhar:** botões na ordem **WhatsApp → E-mail → Com fotos (mais apps)**. Corrigido o "início duplicado" ao enviar (removido o `title` do compartilhamento nativo, que era somado ao texto).
- **Detalhe do imóvel:** os botões **Editar · Compartilhar · Extrato · Excluir · Voltar · Incluir imóvel** foram para o **topo** da tela.
- Inclui o arquivo **CNAME** (`app.corsyncimoveis.com.br`) no pacote.

## v1.33.0 — Novo nome: Cor Sync Imóveis
- O aplicativo passou a se chamar **Cor Sync Imóveis** em todo o texto visível: título da aba, manifesto (nome na instalação), tela **Sobre**, **tutorial** de boas-vindas, telas de **instalar** e **Pro**, e mensagens de **WhatsApp**.
- Mantidos os **identificadores internos** (id do app, chave dos dados `corretorimoveis_db`, nomes de cache e mídia) para **não perder dados nem duplicar a instalação** já feita.
- ⚠️ A **imagem do logo/ícone** ainda mostra o nome antigo (o texto está desenhado dentro da arte) — precisa ser refeita à parte.

## v1.32.1 — Senha: mínimo 10 (não corta mais) + CNAME do domínio
- **Senha:** o campo aceitava só 10 caracteres (`maxlength=10`) e exigia **exatamente 10**, então senhas maiores eram **cortadas** — por isso o caractere especial no fim (ex.: `CelsoRizzieri17#`) "não funcionava". Agora a regra é **no mínimo 10** e o campo aceita senhas longas (até 64). Todas as regras (maiúscula, minúscula, número e especial) passam a acender corretamente.
- **Domínio:** incluído o arquivo `CNAME` (`app.corsyncimoveis.com.br`) no pacote, para o domínio personalizado não se perder ao publicar novas versões.

## v1.32.0 — Abas por etapa, reorganização do cadastro e piscina
- **Registro existente:** ao abrir um imóvel já cadastrado, o app pergunta **Consultar** ou **Editar** e mostra **abas estilo Excel** (com o nome de cada etapa) para pular rápido. Em **Editar**, ao mudar de aba com alterações, pergunta se quer **gravar**; em **Consultar**, não pergunta nada. Cadastro **novo** segue sequencial, sem abas.
- **Etapa Proprietário** movida para a **penúltima** posição (logo antes da Revisão).
- **Piscina:** na linha do lazer agora tem **Piscina (Sim/Não)** e, ao lado, **Aquecida (Sim/Não)** — a Aquecida só fica ativa se Piscina = Sim (antes era um único botão "Piscina aquecida").
- **Taxa de condomínio** reposicionada para **antes de Observações** na tela de Características.
- **Venda exclusiva, Data inicial, Data final e Comissão** foram movidas para a tela **Certidões e documentos**.

## v1.31.0 — Cômodos, Furô e travas de data
- **Características (apartamento, casa e chácara):** novos campos numéricos **Quartos simples, Suítes, Banheiros e Lavanderia** (até 2 dígitos), abaixo do tipo. O bloco de **Lazer** passou a aparecer também para **casa e chácara** (antes só no apartamento).
- **Lazer:** incluído o **Furô** logo após "Piscina aquecida"; a **Sauna** passou para a mesma linha da **Academia**.
- **Financeiro:** os botões **Por mês** e **Fluxo diário** agora mostram "**em aberto**".
- **Lançamentos:** a **Data realizada** (receita e despesa) não aceita mais data anterior à **Data**.
- **Venda exclusiva:** a **Data final** não aceita mais data anterior à **Data inicial** (limites ao vivo + trava ao gravar).

## v1.30.0 — Carteira CRECI em formato retrato, com giro da foto
- O campo **Carteira CRECI (foto)** passou de deitado para **formato retrato** (3:4), centralizado na tela, no mesmo formato da carteira física.
- A foto aparece **sempre inteira dentro do campo**, sem corte nas bordas, seja qual for o tamanho ou a orientação da imagem escolhida.
- Novo botão **"↻ Girar a foto 90°"**: cada toque gira a imagem e regrava. Serve para endireitar a carteira quando a foto sai deitada — basta tocar até ela ficar em pé, com a foto do lado esquerdo.
- A **validade da carteira CRECI** continua podendo ficar **em branco** — nesse caso o aviso vermelho lembra que não haverá alerta de vencimento.

## v1.29.2 — Telefones do proprietário lado a lado
- Na tela de **cadastro/edição de proprietário**, **Tel 1 e Tel 2 passam a ficar na mesma linha**, no mesmo padrão de RG e CPF. A tela ficou mais curta e o formulário cabe com menos rolagem.
- **Tel 3** segue sozinho em linha inteira, e os dois **e-mails** continuam um em cada linha — endereços longos ficariam cortados se divididos ao meio.
- Os campos de e-mail ganharam o teclado de e-mail no celular e um exemplo de preenchimento.

## v1.29.1 — Pergunta antes de sair de um cadastro pela metade
- Tocar no menu de baixo (Início, Imóveis, Agenda, Propriet., Financ. ou Ajustes) **no meio do cadastro de um imóvel ou de uma visita** agora abre a pergunta **"Deseja gravar estas informações antes de sair?"**, com **Sim** e **Não**.
- **Sim** grava e leva para a aba escolhida. Se faltar algum dado obrigatório (imóvel não escolhido, nome do comprador em branco), o app avisa e **permanece na tela**, sem perder nada do que já foi digitado.
- **Não** sai descartando o rascunho — e, em imóvel novo, apaga também as fotos, o vídeo e o contrato que já tinham sido escolhidos, para não deixar arquivo solto ocupando espaço.
- Navegar entre abas fora de um cadastro continua direto, sem pergunta.

## v1.29.0 — Resumo com financeiro e menu sempre visível
- **Resumo de propostas reorganizado:** os botões **Voltar** e **Voltar ao Início** e o **Resumo do período** passaram para o **topo da tela** — dá para ver os totais sem rolar. A lista dos imóveis vem abaixo.
- **Receitas e despesas no resumo do período:** além dos valores solicitados, negociados e da diferença, o resumo mostra agora **Receitas do período**, **Despesas do período** e o **Saldo (receitas − despesas)**, em verde ou vermelho conforme o resultado.
- **Receitas e despesas por imóvel:** cada cartão (ex.: CS00001) ganhou um rodapé com as **receitas**, as **despesas** e o **saldo daquele imóvel** dentro do período escolhido.
- **Menu inferior sempre visível:** Início, Imóveis, Agenda, Propriet., Financ. e Ajustes deixam de sumir nas telas internas — cadastro de imóvel, visita, proprietário, detalhe, extrato, certidões e resumos. As barras de Voltar/Avançar foram reposicionadas logo acima do menu, sem sobreposição.

## v1.28.0 — Dois resumos, telefones lado a lado e 5 campos de outros gastos
- **Dois botões de consulta** na tela de Imóveis: **Por registro** e **Por proposta**. O primeiro filtra pela **data de inclusão do imóvel**; o segundo, pela **data da proposta**. Os detalhes exibidos e os totais são os mesmos nas duas.
- **Cabeçalho colorido** identificando a consulta: **azul** em *POR DATA REGISTRO DO IMÓVEL* e **verde médio** em *POR DATA DA PROPOSTA*.
- **Atalhos removidos** — a tela agora tem apenas **data inicial** e **data final**, com a final nunca podendo ser anterior à inicial.
- **Nova visita / editar visita:** **Telefone 1 e Telefone 2 na mesma linha**.
- **Outros gastos da visita:** onde havia um único campo "Outros", agora há **5 valores**, cada um com sua **descrição de até 15 caracteres** (ex.: Estacionamento, Pedágio). Cada valor preenchido vira uma despesa própria no Financeiro, levando a descrição digitada.
- Visitas antigas continuam funcionando: o valor que estava em "Outros" migra automaticamente para o primeiro campo da nova lista, sem contar duas vezes.

## v1.27.0 — Data da proposta e novo Resumo de propostas
- **Valores do imóvel reorganizados** na etapa de revisão: **Valor solicitado** e **Valor mínimo** na primeira linha; **Valor negociado** e o novo campo **Data da proposta** na segunda.
- **Novo campo "Data da proposta"** — opcional, pode ficar em branco. É gravado com o imóvel e volta preenchido ao editar.
- **Novo botão "Resumo"** na tela de Imóveis, ao lado de Nome, CEP e Cidade. Abre uma tela nova com **data inicial e data final** (a final nunca pode ser anterior à inicial) e atalhos **Este mês · Este ano · Tudo**.
- A tela lista os imóveis do período **ordenados pela data de inclusão, do mais antigo para o mais recente**, mostrando registro, data de inclusão, valor solicitado, data da proposta e valor negociado.
- No fim, o **resumo do período**: total de visitas (todos os registros listados), total de propostas (apenas os que têm data da proposta preenchida), soma dos valores solicitados, soma dos negociados e a **diferença** — em **verde** quando maior que zero e em **vermelho** quando igual ou menor que zero.

## v1.26.0 — Primeiro acesso com senha, contador do teste e caixa do Plano colorida
- **Contador do teste na tela Início:** durante todo o teste grátis aparece, logo abaixo do aviso do CRECI, a faixa **"🎁 TESTE GRÁTIS · Faltam X dias"**. Faltando 5 dias ou menos ela vira laranja com **"⏳ ACABANDO"**.
- **Tela de primeiro acesso:** ao abrir o app pela primeira vez, o corretor é convidado a **criar uma senha, digitada duas vezes** para conferir. A tela avisa na hora se as senhas não conferem e só libera o botão quando conferem e as regras são atendidas.
- **Durante o teste grátis a senha é opcional** — o botão **"Continuar sem senha (teste grátis)"** entra direto no app, e ela pode ser criada depois.
- **Ao assinar o Pro a senha passa a ser obrigatória:** quem ativar um código sem ter senha é levado a criá-la (também com confirmação) e a ativação continua logo em seguida. **Nenhum dado é apagado** — o cadastro que já existe passa a ser criptografado com a nova senha.
- Criada a senha, o app volta a pedi-la ao abrir, com a tela de login de sempre.
- **Ajustes › Plano:** a caixa agora é colorida — **amarelo bem claro** durante o teste grátis e **verde bem claro** com o Pro ativo (vermelho claro quando o teste termina).

## v1.25.0 — Modo consulta ao fim do teste grátis
- Quando o **teste de 30 dias vence** e não há Pro ativo, o app entra em **modo consulta**: todas as telas continuam abrindo normalmente — Início com o **Financeiro em aberto**, Imóveis, Agenda, Proprietários, Financeiro e relatórios — mas **nada pode ser incluído, alterado ou excluído**.
- **Bloqueadas:** cadastrar/editar/excluir imóvel, proprietário e visita; avaliação de interesse; lançar/editar/excluir receita e despesa; trocar ou remover fotos, vídeo, contrato e certidões. Ao tentar, o app explica que o teste acabou e oferece **Assinar Pro**.
- **Liberadas:** toda a tela de **Ajustes**, incluindo **Dados do corretor**, o **becape** e a **ativação do plano Pro**.
- A faixa na tela Início mostra **quantos dias ainda restam da janela de consulta** (7 dias a contar do bloqueio).
- **Nenhum dado é apagado** em momento algum — ativando o Pro, tudo volta a funcionar exatamente como antes.

## v1.24.0 — Proprietário com imóvel não pode ser excluído
- Ao tocar em **Excluir proprietário**, o app agora **verifica se existe imóvel cadastrado com esse proprietário**. Havendo, a exclusão é **bloqueada** e aparece a mensagem **"Tem imóvel deste proprietário"**, com a **lista dos imóveis** — tipo (Casa, Apartamento, Chácara/Sítio, Terreno) e código de registro (ex.: CS00006).
- A verificação pega tanto os imóveis **vinculados pelo cadastro** quanto os antigos, sem vínculo, que guardam o **mesmo nome** de proprietário — assim nenhum imóvel fica órfão por engano.
- Sem imóvel algum, a exclusão segue como antes, com a confirmação de sempre.

## v1.23.0 — Separador de milhar, carteira CRECI no compartilhamento e ajustes de tela
- **Dinheiro com separador de milhar em todo o app:** os valores passam a aparecer como **R$ 12.980,00** (antes R$ 12980,00). Vale para Financeiro, fluxo diário, extrato do imóvel, detalhe, revisão, tela Início e compartilhamento. Negativos saem como **- R$ 271,00**.
- **Compartilhar imóvel:** nova chave **"Incluir a carteira CRECI"** na tela de compartilhamento. Ligada, envia junto a foto da carteira cadastrada em *Ajustes › Dados do corretor*; desligada (padrão), envia só as fotos e a descrição. Se não houver carteira cadastrada, o app avisa e não mostra a opção.
- **Tela da visita:** abaixo de *Tamanho do terreno* e *Área construída* aparecem agora **Frente, Fundos, Lado esquerdo e Lado direito**, trazidos do cadastro do imóvel (somente leitura). Sem medida cadastrada, mostra "—".
- **Agenda:** botão **Voltar ao Início** no fim da tela.
- **Agenda — hora por extenso:** o horário da visita passa a aparecer como **as 03:10 hs**.
- **Dados do corretor:** a foto da carteira CRECI passa a ser exibida **inteira dentro do campo**, sem corte nas bordas — antes a imagem era ampliada e ficava cortada.

## v1.22.0 — Medidas na chácara, Financeiro sem "Semana" e datas do fluxo diário
- **Chácara/Sítio:** os quatro campos de medida do lote — **Frente, Fundos, Lado esquerdo e Lado direito**, em metros lineares — passam a aparecer também no cadastro da chácara, logo abaixo de *Terreno / Área total*, iguais aos do terreno. Aparecem na revisão, no detalhe e no compartilhamento; continuam ausentes em casa e apartamento.
- **Financeiro:** o botão **Semana** foi removido. Os filtros ficam **Por mês · Fluxo diário · Realizado · Todas**.
- **Fluxo diário — datas:** ao abrir, a **data inicial** vem com **ontem (hoje − 1 dia)** e a **data final** com **hoje**. As duas continuam livres para escolher no calendário, inclusive períodos passados.
- **A data final nunca fica antes da inicial:** se você escolher uma data final anterior, o app avisa e mantém a anterior; se empurrar a data inicial para depois da final, a final acompanha automaticamente.

## v1.21.0 — Validade do CRECI opcional e sem data vencida
- Em **Ajustes → Dados do corretor**, o campo **Validade da carteira CRECI** deixou de ser obrigatório: dá para salvar em branco.
- **Com o campo vazio**, aparece logo abaixo dele, em **vermelho e negrito**: *"Não será avisado — sem a validade preenchida, o app não lembra você do vencimento da carteira CRECI."* O aviso some assim que uma data válida é escolhida.
- **Não aceita data anterior a hoje.** O calendário já abre bloqueando os dias passados e, se mesmo assim uma data vencida for digitada, o app avisa em vermelho e não deixa salvar.
- Preenchida uma data futura, tudo segue como antes: aviso na tela inicial a 30, 15, 7 e 1 dia do vencimento.

## v1.20.0 — Medidas do lote no cadastro de terreno
- Na etapa **Características do terreno**, logo abaixo de *Terreno / Área total*, entraram quatro campos de medida em **metros lineares**: **Frente**, **Fundos**, **Lado esquerdo** e **Lado direito**. São opcionais e aceitam casas decimais (ex.: 10,5).
- Aparecem **somente no terreno** — casa, apartamento e chácara seguem sem eles.
- As medidas preenchidas aparecem na **revisão**, no **detalhe do imóvel** e no **texto de compartilhamento**, numa linha só: *Frente 10 m · Fundos 10,5 m · Esq. 25 m · Dir. 25 m*. Se nenhuma for preenchida, a linha não aparece.

## v1.19.1 — Botão "Traçar rota" em destaque
- Na tela de **detalhe do imóvel**, o botão **🧭 Traçar rota (Waze / Google Maps)** deixou de ser cinza e passou a ter **fundo azul claro, texto e borda azuis** — fica visível de imediato entre os cartões brancos, sem competir com os botões de ação principais.

## v1.19.0 — Detalhe do dia no fluxo diário + nova ordem dos filtros
- **Toque no dia, veja os lançamentos.** No **Fluxo diário** (e na **Semana**), tocar numa data com movimento — por exemplo 22/08/2026 — abre a tela **"Lançamentos de 22/08/2026"** com todos os títulos daquele dia. Dias sem movimento continuam apagados e não abrem nada.
- **Mesmas cores do Financeiro:** receita em verde com `+ R$` e selo **A RECEBER**; despesa em vermelho com `- R$` e selo **A PAGAR**. No topo, um resumo com **Receitas / Despesas / Saldo do dia**.
- **Toque no lançamento** abre a edição de sempre (dá para preencher a "Data realizada" ali mesmo) e a lixeira exclui. Ao fim do relatório há o botão **Voltar**, que retorna ao fluxo diário no mesmo período.
- Só entram os lançamentos **em aberto** (sem "Data realizada"), exatamente os que somam no fluxo — os realizados continuam na aba **Realizado**.
- **Nova ordem dos filtros do Financeiro:** **Por mês · Fluxo diário · Semana · Realizado · Todas**.

## v1.18.0 — Cadastro do imóvel com 8 etapas (telas unidas)
- **"Garagem e portão" e "Água, energia e internet" viraram uma etapa só.** O cadastro do imóvel passou de **9 para 8 etapas**, com menos toques em "Avançar". Na nova etapa 4 os dois blocos aparecem um abaixo do outro, com os mesmos campos de antes.
- **Nome da etapa conforme o tipo:** "Garagem e infraestrutura" para casa, apartamento e chácara; **"Acesso e infraestrutura"** para terreno (que não tem garagem).
- **Numeração e barra de progresso** ajustadas em todo o assistente: Fotos passa a ser a 5ª etapa, Vídeo a 6ª, Certidões a 7ª e Revisão a 8ª. O tile "Casa" na tela de tipos agora diz **"Cadastro completo — 8 etapas"**.
- **Nada muda nos dados:** os campos gravados (vagas, garagem coberta, disposição, portão, portaria com vigia, água/fonte/situação, energia, internet, sarjetas e iluminação) continuam iguais — imóveis já cadastrados abrem e regravam normalmente, e a revisão e o compartilhamento seguem sem alteração.

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
