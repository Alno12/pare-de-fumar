# Parar de Fumar 🚭

App para acompanhar sua jornada para parar de fumar: tempo sem fumar, dinheiro
economizado, cigarros não fumados, marcos de recuperação de saúde e um botão
de ajuda rápida (dicas + exercício de respiração) para os momentos de vontade.

Seus dados ficam salvos apenas no `localStorage` do navegador — nada é
enviado para um servidor.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
```

## Deploy no Netlify

O repositório já inclui um `netlify.toml` com o comando de build (`npm run
build`) e a pasta de publicação (`dist`), além do redirect necessário para
uma SPA. Basta conectar o repositório no Netlify (ou arrastar a pasta `dist`
gerada pelo build) e o deploy funciona sem configuração adicional.
