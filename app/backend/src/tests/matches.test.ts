import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Matches from '../database/models/Matches';
import { Model } from 'sequelize';
import { mockfindAll, mockFindFalse } from './mocks/matchMock'
import { tokenMock } from './mocks/loginMock';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testes para a rota "/maches"', () => { 

  afterEach(function () {
    sinon.restore();
  })

  it('Retorna status 200 e body com a lista de times', async () => {
    sinon.stub(Matches, 'findAll').resolves(mockfindAll as unknown as Model[]);
    const response = await chai.request(app).get('/matches');
    expect(response.status).to.be.equal(200);    
    expect(response.body).to.be.deep.equal(mockfindAll);
  });

  it('Retorna partidas encerradas', async function () {
    sinon.stub(Model, 'findAll').resolves(mockFindFalse as unknown as Matches[])

    const response = await chai.request(app).get('/matches?inProgress=false')
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(mockFindFalse)
  })

  it('Retorna um erro ao inserir times iguais', async function() {
    const response = await chai.request(app).post('/matches').send({
      homeTeamId: 8,
      awayTeamId: 8,
      homeTeamGoals: 2,
      awayTeamGoals: 2,
    }).set('authorization', tokenMock)

    expect(response.status).to.be.equal(422)
    expect(response.body).to.be.deep.equal({ "message": "It is not possible to create a match with two equal teams" })
  })

});