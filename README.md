# Vite React Template com TypeScript, ESLint, Prettier, Styled Components, Jest e Storybook

Este é um template para iniciar rapidamente projetos React usando Vite. Ele já vem configurado com várias ferramentas essenciais para desenvolvimento, incluindo TypeScript, ESLint, Prettier, Styled Components, Jest e Storybook.

## Pré-requisitos

- Node.js (versão >= 12.0.0)
- npm ou Yarn

## Como usar este template

Para usar esse template você pode clonar ou até mesmo criar o seu próprio template
usando esse como um guia/base.

``` bash
git clone https://github.com/EvandroCalado/vite_template
cd vite_template
npm install ou yarn
npm run dev ou yarn dev
```


Este projeto está configurado para subir o servidor de desenvolvimento no http://localhost:3000 ao invés da porta padrão do vite.

## Ferramentas incluídas

- **TypeScript**: Adiciona suporte para TypeScript ao projeto React.
- **ESLint**: Configura o ESLint com configurações recomendadas para React e TypeScript.
- **Prettier**: Configura o Prettier para formatar automaticamente o código.
- **Styled Components**: Integra o Styled Components para estilização CSS-in-JS.
- **Jest**: Configura o Jest para testes unitários.
- **Storybook**: Configura o Storybook para desenvolvimento de componentes isolados.
- **EditorConfig**: Define convenções de formatação de código para vários editores de texto.

## Scripts disponíveis

- `dev`: Inicia o servidor de desenvolvimento Vite.
- `build`: Compila o aplicativo para produção.
- `lint`: Executa o ESLint para verificar o código.
- `lint:fix`: Corrige os erros de lint.
- `test`: Executa os testes usando o Jest.
- `test:coverage`: Executa os testes com report de cobertura.
- `storybook`: Inicia o servidor Storybook para desenvolvimento de componentes.
- `build-storybook`: Compila o Storybook para produção.

## Estrutura do diretório

```
my-react-app/
├── .jest/
├── .storybook/
├── public/
├── src/
│   ├── App.tsx
│   └── main.tsx
│   └── /assets
│   └── /components
│   └── /styles
│   └── /types
│   └── /utils
├── .babelrc
├── .editorconfig
├── .eslintignore
├── .eslintrc.json
├── .prettierrc.json
├── jest.config.cjs
├── tsconfig.json
├── vite.config.ts
```

## Contribuindo

Se você encontrar problemas ou tiver sugestões para melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a licença [MIT](LICENSE).

---

Você pode personalizar e adicionar mais detalhes conforme necessário. Espero que isso ajude!
