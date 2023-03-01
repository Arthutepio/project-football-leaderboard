import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Teams from '../database/models/Teams';
import team from './mock/teamsMock';

chai.use(chaiHttp);

const { expect } = chai;



chai.use(chaiHttp);

describe('Testes para a rota Teams', function () {

  it('Deve buscar todos os times com sucesso', async function () {
    sinon.stub(Teams, 'findAll').resolves(team as Teams[])
    const response = await chai.request(app).get('/teams').send(team);
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(team)
  });
});