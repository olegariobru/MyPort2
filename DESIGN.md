# Direção visual — Portfólio Bruno Olegário

## Intenção

Portfólio autoral para **mostrar** trabalho e repertório. A interface deve parecer editorial, direta e humana: variação alta, movimento médio-alto e densidade baixa. O fundo fotográfico existente permanece como contexto; o conteúdo usa superfícies sólidas para preservar leitura.

## Sistema

- Cor de ação: bordo `#7f1d2d`; variação clara `#b94455`.
- Texto: branco `#ffffff`; apoio `#c9c6c8`.
- Superfícies: `#0d0d0f` e `#151517`, sem degradês.
- Espaçamento: escala base de 4 px, com intervalos de 8, 12, 16, 24, 32, 48, 64 e 96 px.
- Raios: 0 ou 4 px. Não usar pílulas em contêineres.
- Tipografia: Montserrat nos títulos e Open Sans/Roboto em leitura e interface.
- Títulos grandes, sólidos e de uma cor. Hierarquia por escala, peso e espaço.

## Movimento

O gesto principal é uma progressão vertical. Na entrada, as linhas do título sobem de uma fenda; em Projetos, a linha bordo avança conforme o scroll e revela cada marco uma única vez. Entradas secundárias usam apenas opacidade e deslocamento vertical de até 16 px. `prefers-reduced-motion` remove o movimento sem esconder conteúdo.

## Componentes e revisão

- Cabeçalho sólido; menu móvel transforma os três traços em X.
- Projetos em linha do tempo vertical, com imagem, contexto e ações explícitas.
- Contato aparece somente em Sobre mim.
- Nenhum degradê, glassmorphism, cursor de digitação, título bicolor ou conjunto genérico de cartões.
- Contraste legível, foco visível e ausência de overflow horizontal em 390 px.
