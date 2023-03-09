import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Matches from '../database/models/Matches';
import { Model } from 'sequelize';
import { matchesByTeamNameListMock, matchesListMock } from './mocks/matchMock'

chai.use(chaiHttp);

const { expect } = chai;

describe('Testes para a rota "/teams"', () => { 

  afterEach(function () {
    sinon.restore();
  })

  it('Retorna status 200 e body com a lista de times', async () => {
    sinon.stub(Matches, 'findAll').resolves(matchesListMock as unknown as Model[]);
    const response = await chai.request(app).get('/matches');
    expect(response.status).to.be.equal(200);    
    expect(response.body).to.be.deep.equal(matchesByTeamNameListMock);
  });

});