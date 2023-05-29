# Boas vindas ao Football Leaderboard!

O projeto Football Leaderboard tem como objetivo criar uma tabela de classificação para um campeonato de futebol. Minha responsabilidade foi desenvolver uma API, utilizando o método TDD, e integrar as aplicações por meio do docker-compose, a fim de que funcionassem consumindo um banco de dados.

Para tanto, desenvolvi um back-end dockerizado, utilizando modelagem de dados por meio do Sequelize, em que se respeitaram as regras de negócio. A API foi concebida para ser consumida por um front-end, já provido nesse projeto.

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

## 🛠️ Desenvolvido com:
* [TypeScript](https://www.typescriptlang.org/) - linguagem de programação fortemente tipada que se baseia em JavaScript;
* [Node.js](https://nodejs.org/pt-br/docs/) - para execução de testes e instalação de pacotes de bibliotecas;
* [Git](https://git-scm.com/doc) - para versionamento;
* [Express](https://expressjs.com/en/starter/installing.html)- para gerenciar requisições de diferentes verbos HTTP;
* [Docker](https://www.docker.com/) - para a conteinerização da aplicação;
* [MySQL](https://dev.mysql.com/doc/) - para armazenamento e manipulação de dados;
* [Sequelize](https://sequelize.org/docs/v6/getting-started/) - para fazer interações com o banco de dados;

## Tasks:
Parte do projeto foi desenvolvido pela [Trybe](https://app.betrybe.com/) e me foi solicitado que desenvolvesse os seguintes requisitos:
* Fluxo 1: Teams (Times)
1 - Desenvolva em /app/backend/src/database nas pastas correspondentes, uma migration e um model para a tabela de times
2 - (TDD) Desenvolva testes que cubram no mínimo 5 por cento dos arquivos em /app/backend/src, com um mínimo de 7 linhas cobertas
3 - Desenvolva o endpoint /teams no back-end de forma que ele possa retornar todos os times corretamente
4 - (TDD) Desenvolva testes que cubram no mínimo 10 por cento dos arquivos em /app/backend/src, com um mínimo de 19 linhas cobertas
5 - Desenvolva o endpoint /teams/:id no back-end de forma que ele possa retornar dados de um time específico

* Fluxo 2: Users e Login (Pessoas Usuárias e Credenciais de acesso)
6 - Desenvolva em /app/backend/src/database nas pastas correspondentes, uma migration e um model para a tabela de pessoas usuárias
7 - (TDD) Desenvolva testes que cubram no mínimo 15 por cento dos arquivos em /app/backend/src, com um mínimo de 25 linhas cobertas
8 - Desenvolva o endpoint /login no back-end de maneira que ele permita o acesso com dados válidos no front-end
9 - (TDD) Desenvolva testes que cubram no mínimo 20 por cento dos arquivos em /app/backend/src, com um mínimo de 35 linhas cobertas
10 - Desenvolva o endpoint /login no back-end de maneira que ele não permita o acesso com um email não cadastrado ou senha incorreta no front-end
11 - (TDD) Desenvolva testes que cubram no mínimo 30 por cento dos arquivos em /app/backend/src, com um mínimo de 45 linhas cobertas
12 - Desenvolva um middleware de validação para o token, verificando se ele é válido, e desenvolva o endpoint /login/role no back-end de maneira que ele retorne os dados corretamente no front-end

* Fluxo 3: Matches (Partidas)
13 - Desenvolva em /app/backend/src/database nas pastas correspondentes, uma migration e um model para a tabela de partidas
14 - (TDD) Desenvolva testes que cubram no mínimo 45 por cento dos arquivos em /app/backend/src, com um mínimo de 70 linhas cobertas
15 - Desenvolva o endpoint /matches de forma que os dados apareçam corretamente na tela de partidas no front-end
16 - Desenvolva o endpoint /matches de forma que seja possível filtrar somente as partidas em andamento, e também filtrar somente as partidas finalizadas, na tela de partidas do front-end
17 - Desenvolva o endpoint /matches/:id/finish de modo que seja possível finalizar uma partida no banco de dados
18 - Desenvolva o endpoint /matches/:id de forma que seja possível atualizar partidas em andamento
19 - (TDD) Desenvolva testes que cubram no mínimo 60 por cento dos arquivos em /app/backend/src, com um mínimo de 80 linhas cobertas
20 - Desenvolva o endpoint /matches de modo que seja possível cadastrar uma nova partida em andamento no banco de dados
21 - Desenvolva o endpoint /matches de forma que não seja possível inserir uma partida com times iguais nem com um time que não existe na tabela de times

* Fluxo 4: Leaderboards (Placares)
22 - (Bônus; TDD) Desenvolva testes que cubram no mínimo 80 por cento dos arquivos em /app/backend/src, com um mínimo de 100 linhas cobertas
23 - Desenvolva o endpoint /leaderboard/home de forma que retorne as informações do desempenho dos times da casa com as seguintes propriedades: name, totalPoints, totalGames, totalVictories, totalDraws, totalLosses, goalsFavor e goalsOwn
24 - Desenvolva o endpoint /leaderboard/home de forma que seja possível filtrar as classificações dos times da casa na tela de classificação do front-end com os dados iniciais do banco de dados, incluindo as propriedades goalsBalance e efficiency, além das propriedades do requisito anterior
25 - Desenvolva o endpoint /leaderboard/home de forma que seja possível filtrar as classificações dos times da casa na tela de classificação do front-end, e atualizar a tabela ao inserir a partida Corinthians 2 X 1 Internacional
26 - Desenvolva o endpoint /leaderboard/away de forma que retorne as informações do desempenho dos times visitantes com as seguintes propriedades: name, totalPoints, totalGames, totalVictories, totalDraws, totalLosses, goalsFavor e goalsOwn
27 - Desenvolva o endpoint /leaderboard/away, de forma que seja possível filtrar as classificações dos times quando visitantes na tela de classificação do front-end, com os dados iniciais do banco de dados, incluindo as propriedades goalsBalance e efficiency, além das propriedades do requisito anterior
28 - Desenvolva o endpoint /leaderboard/away de forma que seja possível filtrar as classificações dos times quando visitantes na tela de classificação do front-end e atualizar a tabela ao inserir a partida Corinthians 2 X 1 Internacional
29 - Desenvolva o endpoint /leaderboard de forma que seja possível filtrar a classificação geral dos times na tela de classificação do front-end com os dados iniciais do banco de dados
30 - (Bônus) Desenvolva o endpoint /leaderboard de forma que seja possível filtrar a classificação geral dos times na tela de classificação do front-end e atualizar a tabela ao inserir a partida Flamengo 3 X 0 Napoli-SC

Criado por [Trybe](https://www.betrybe.com/) e desenvolvido com ❤️ por [Arthur Costa](https://arthutepio-portifolio.vercel.app/) 😊
[![Linkedin](https://skillicons.dev/icons?i=linkedin)](https://www.linkedin.com/in/arthutepio/) [![Github](https://skillicons.dev/icons?i=github)](https://www.linkedin.com/in/arthutepio/) 

