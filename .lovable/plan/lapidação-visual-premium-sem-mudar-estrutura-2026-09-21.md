# Lapidação visual premium (sem mudar estrutura)

A estrutura atual (cabeçalho + 2 cards lado a lado + caixinha + rodapé), os dados e as posições permanecem exatamente como estão. Só refinamentos de estilo.

## 1. Cards Uniplay e GOAT
- Reduzir a altura mínima levemente (de `min-h-[188px]` para ~`168px`) e subir o número (68/10) com espaçamento mais ajustado (`mt-auto` → margem menor), sem mexer em largura ou grid.
- Gradientes mais ricos e profundos: Uniplay azul profundo → ciano vivo; GOAT laranja vivo → dourado, com terceiro ponto de cor no gradiente para profundidade sem escurecer.
- Iluminação sutil: highlight superior translúcido (faixa de luz no topo) + formas abstratas discretas já existentes refinadas (opacidade e blur ajustados).
- Sombras mais suaves e profundas por card; borda interna clara mais delicada.
- Sem botões, setas ou novos elementos.

## 2. Caixinha
- Tamanho e posição atuais preservados.
- Verde esmeralda mais sofisticado: extremidade com verde mais profundo (ex. oklch ~0.48 0.15 165) até verde vivo (~0.72 0.17 152).
- Cofrinho translúcido ao fundo mantido (só refinar opacidade).
- `R$ 20,00` continua o maior destaque (tamanho mantido, talvez leve refinamento de peso/letter-spacing).
- Quadro da frase inferior: fundo mais translúcido com blur (glass sutil), borda mais elegante, cantos levemente maiores.

## 3. Rodapé
- Texto "PEQUENOS CONTROLES, GRANDES RESULTADOS." mantido.
- Card com um pouco mais de presença: padding levemente maior, sombra mais definida e borda mais visível — altura quase inalterada, minimalismo preservado.

## 4. Acabamento geral (src/styles.css + ajustes pontuais)
- Atualizar tokens de paleta: gradientes com stops mais profundos e vivos (nada pastel, nada lavado, nada escuro demais).
- Sombras suaves e em camadas; highlights discretos; cantos arredondados consistentes.
- Contraste alto mantido (texto branco sobre cores vivas).

## Arquivos
- `src/styles.css` — apenas os tokens da paleta OWERPLAY (uniplay/goat/vault) e sombras.
- `src/routes/index.tsx` — apenas classes/estilos de acabamento (altura, espaçamentos, translucidez, iluminação). Nenhuma mudança de estrutura, dados ou componentes.
