# Portfólio — Bruno Olegário

Portfólio pessoal para apresentar minha experiência em Tecnologia da Informação e meus projetos de desenvolvimento. Construído com React e Vite, com publicação na Vercel.

## Experiência atual

- Visual em bordô e branco, com o background original preservado e sem degradês ou glassmorphism.
- Inglês como idioma inicial, com seletor **EN | PT | ES** centralizado acima do rodapé. A preferência é salva no navegador e o idioma do documento acompanha a seleção.
- Apresentação com entrada animada do título, assinatura profissional em texto bordô e retrato sem legenda.
- Projetos em linha do tempo vertical, com progresso ligado ao scroll e revelação dos itens. No desktop, imagem e descrição alternam de lado; no mobile, seguem uma coluna com marcadores dentro da tela.
- Menu hambúrguer no mobile, com transformação dos três traços em X e fechamento pela tecla Escape.
- Contato exclusivo da página Sobre mim, com composição tipográfica e link direto para e-mail.
- Interface sem emojis; os links de redes sociais usam ícones SVG.

## Projetos apresentados

| Projeto | Finalidade |
| --- | --- |
| AccessManager | Organização de acessos e informações de RH |
| ARKtetura | Site para um escritório de arquitetura e urbanismo |
| RenameOS Desktop | Padronização e renomeação de arquivos em lote |
| pyCacador | Localização de arquivos duplicados |

Cada projeto inclui links para seu repositório e para demonstração, capturas ou documentação, conforme disponível.

## Stack

- React 18 e React Router
- Vite 8
- CSS responsivo e CSS Modules
- React Icons
- Testes com o runner nativo do Node.js

## Executar localmente

Requer Node.js 22.12 ou superior e npm.

```bash
npm ci
npm run dev
```

Abra o endereço exibido pelo Vite, normalmente `http://localhost:5173`.

## Testes e build

```bash
npm test
npm run build
npm run preview
```

O build é gerado em `dist/`. `npm run preview` permite conferir esse build localmente antes da publicação.

Os testes verificam os dados dos projetos e contratos básicos de navegação, foco, breakpoints e movimento reduzido. A revisão no navegador complementa esses testes para conferir animações, idiomas, contraste e cortes de conteúdo.

## Estrutura

- `src/App.jsx`: rotas, cabeçalho e navegação responsiva.
- `src/Componentes/Banner/`: apresentação da página inicial.
- `src/Componentes/ProjectCards/`: linha do tempo dos projetos e animação de scroll.
- `src/Componentes/Footer/`: contato e redes sociais.
- `src/paginas/`: páginas Projetos e Sobre mim.
- `src/data/projects.js`: conteúdo e links dos projetos.
- `src/language.jsx`: traduções, contexto de idioma e seletor EN / PT / ES.
- `src/index.css` e `src/App.css`: tokens visuais e estilos compartilhados.
- `public/`: favicon, manifesto e sitemap.
- `DESIGN.md`: decisões de direção visual.

Ao alterar textos, mantenha as versões em inglês, português e espanhol sincronizadas em `src/language.jsx`.

## Acessibilidade

Link para pular ao conteúdo, foco visível, navegação identificada, controles de idioma com estado acessível e textos alternativos nas imagens. As animações respeitam `prefers-reduced-motion`. A linha do tempo e o menu se adaptam a telas menores.

## Publicação

A branch `main` está conectada à produção na Vercel. Alterações enviadas para ela iniciam um deploy automático; confirme o status da Vercel no GitHub antes de considerar a publicação concluída.

## Autor

[Bruno Olegário](https://github.com/olegariobru) · [LinkedIn](https://www.linkedin.com/in/bolgarimacedo/)
