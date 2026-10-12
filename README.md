# Portfólio — Bruno Olegário

Portfólio pessoal em português para apresentar experiência em Tecnologia da Informação e projetos de desenvolvimento.

## Stack

- React 18 e React Router
- Vite 8
- Componentes React com JSX em arquivos `.jsx`
- CSS responsivo e CSS Modules compatíveis
- Testes de dados com o runner nativo do Node.js

## Requisitos

Node.js 22.12 ou superior e npm.

## Desenvolvimento

```bash
npm ci
npm run dev
```

Abra o endereço local exibido pelo Vite (normalmente `http://localhost:5173`).

## Build e testes

```bash
npm test
npm run build
npm run preview
```

O build de produção é criado em `dist/`. O workflow do GitHub instala as dependências do lockfile, executa os testes e valida o build em cada push e pull request.

## Estrutura

- `src/paginas/`: início, projetos e sobre mim.
- `src/Componentes/`: navegação, apresentação, cards e rodapé.
- `src/data/projects.js`: dados e links dos projetos priorizados.
- `public/`: manifesto, favicon e sitemap.

Os links de apresentação indicam claramente quando levam a uma demonstração ao vivo, capturas de tela ou instruções no README.

## Acessibilidade e telas menores

O site inclui link para pular ao conteúdo, navegação identificada, foco visível, nomes acessíveis em ícones, imagens decorativas ocultas para leitores de tela e suporte a preferência por movimento reduzido. A grade se adapta a telas estreitas. Os testes também verificam esses contratos de navegação, foco, preferência de movimento e breakpoints; a inspeção visual manual no navegador continua recomendada.

## Autor

[Bruno Olegário](https://github.com/olegariobru) · [LinkedIn](https://www.linkedin.com/in/bolgarimacedo/)
