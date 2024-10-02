# API Upload de Imagens

Essa aplicação foi desenvolvida exclusivamente para o upload e visualização de imagens. Através dessa API você consegue fazer upload de imagens, visualiza-las.


**STACK PRINCIPAL:** *Javascript, NodeJS, Express, MongoDB, Mongoose & Padrões REST*

## O QUE FOI UTILIZADO E ABSORVIDO DURANTE O PROJETO

- Criação e Consumo de API's
- Padrões **REST**
- Verbos **HTTPS**
- Status Code
- Endpoints Amigáveis
- Upload de Imagens com **Multer**
- Banco de Dados não Relacional **MongoDB*, utilizando **Mongoose**
- "Travando" Requisições pra API com **CORS**
- Variáveis de Ambiente com **DotEnv**
- Testando Requisição pra API com **Insominia**

## GUIA RÁPIDO DE INSTALAÇÃO

*1 - Dependências Iniciais*

Antes de qualquer coisa, você precisa ter instaldo o [`NPM & Node`](https://nodejs.org/en/) + [`Git`](https://git-scm.com/). Para Instalar o  siga o passo a passo de cada link listado abaixo:


- [`NPM & Node`](https://nodejs.org/en/)
- [`Git`](https://git-scm.com/)

*2 - Base de Dados*

Será necessário gerar uma string de conexão com o banco. Para tal crie uma conta no atlas (grátis) e gere essa string. Você pode criar sua conta [Clicando aqui](https://www.mongodb.com/cloud/atlas/register).

OBS.: Caso tenha duvidas, você pode seguir [este tutorial aqui](https://medium.com/reprogramabr/conectando-no-banco-de-dados-cloud-mongodb-atlas-bca63399693f)

Tendo gerado a string, procure pelo arquivo .env.example e siga o passo a passo abaixo:

- colo a string no lugar indicado dentro do arquivo. Deverá ficar algo como `CONECTION_STRING=string-que-vc-criou`
- renomeie o arquivo para .env

*3 - Rodando na Sua Máquina*

Considerando que você executou as etapas acima com êxito, abra o seu terminal e rode os seguintes comandos em suas respectivas ordens:

- `git clone https://github.com/Bruno-Nunes17/image-upload-api`
- `cd upload-api`
- `npm install`
- `npm start` or `npm run dev`

Pronto! a API estará rodando na porta 3000. Caso você deseje alterar para outra porta, basta adicionar ao aquivo .env do projeto como no exemplo a seguir: `PORT=4000`.
### Edpoints

`POST /uploads`: <br/>
Método para fazer upload de imagem. Você deve enviar no corpo da requisição um campo "file" contendo o arquivo. <br/>

`GET /photos`:  <br/>
Método para Listar Uploads Realizados Nessa Ferramenta. Ele retorna a url do arquivo, nome original e tamanho. <br/>
