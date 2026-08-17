# Corretor Imóveis Autônomo — Histórico de versões

## v1.5.1 — correção da câmera/galeria
- Corrigido: em vários pontos (fotos do imóvel, vídeo, foto do proprietário, foto do
  corretor e carteira CRECI), a opção "Câmera"/"Galeria" não abria em alguns celulares.
  Causa: os campos de arquivo ficavam com display:none, e vários navegadores móveis
  (iOS/Safari e PWA instalado no Android) ignoram o clique nesse caso.
  Agora os campos ficam ocultos porém "presentes" (fora da tela), e o disparo acontece
  no toque, antes de fechar a janela — a câmera/galeria abre e grava no campo correto.

## v1.5.0 — correções da análise técnica
- --line, buscas do Início/Agenda, WhatsApp sem telefone, tipos "em breve", máscara do
  condomínio, atalho Mapa→Imóveis, saudação com nome, validação do wizard, valores 0,00,
  terreno/área construída na visita.

## v1.4.x / v1.3.x / v1.2.x / v1.1.0 / v1.0.x
- Fluxo semana, contatos na Início, extrato do imóvel, receitas + fluxo, agenda editável,
  renome + README, ZIP inicial.
