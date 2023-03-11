# Boas vindas ao Football Leaderboard!

O projeto Football Leaderboard tem como objetivo criar uma tabela de classificação para um campeonato de futebol. Minha responsabilidade foi desenvolver uma API, utilizando o método TDD, e integrar as aplicações por meio do docker-compose, a fim de que funcionassem consumindo um banco de dados.

Para tanto, desenvolvemos um back-end dockerizado, utilizando modelagem de dados por meio do Sequelize, em que se respeitaram as regras de negócio. A API foi concebida para ser consumida por um front-end, já provido nesse projeto.

### 🔧 Instalação
Para utilizar o repositório no desenvolvimento, siga os seguintes passos:

1 - Clone o repositório: 
```
git clone git@github.com:Arthutepio/project-football-leaderboard.git
cd project-football-leaderboard
```
2 - Instale as dependências na raiz do projeto:
```
npm install
```
3 - Inicie o Docker Compose na raiz do projeto:
```
npm run compose:up
```
4 - Abra o diretorio do frontend e inicialize a aplicação:
```
cd app/frontend
npm start
```

## 🛠️ Construído com:
* [TypeScript](https://www.typescriptlang.org/) - linguagem de programação fortemente tipada que se baseia em JavaScript;
* [Node.js](https://nodejs.org/pt-br/docs/) - para execução de testes e instalação de pacotes de bibliotecas;
* [Git](https://git-scm.com/doc) - para versionamento;
* [Express](https://expressjs.com/en/starter/installing.html)- para gerenciar requisições de diferentes verbos HTTP;
* [Docker](https://www.docker.com/) - para a conteinerização da aplicação;
* [MySQL](https://dev.mysql.com/doc/) - para armazenamento e manipulação de dados;
* [Sequelize](https://sequelize.org/docs/v6/getting-started/) - para fazer interações com o banco de dados;

Criado por [Trybe](https://www.betrybe.com/) e desenvolvido com ❤️ por [Arthur Costa](https://www.linkedin.com/in/arthutepio/) 😊

