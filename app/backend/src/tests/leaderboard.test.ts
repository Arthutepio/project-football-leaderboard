import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Teams from '../database/models/Teams';
import Matches from '../database/models/Matches';
import { teamsListMock } from './mocks/teamsMock';
// import { matchesListMock } from './mocks/matchMock';
import { leaderboardMock, matchesMock } from './mocks/leaderMock';
import { mockfindAll } from './mocks/matchMock';

chai.use(chaiHttp);

const { expect } = chai;

describe('', () => {

  afterEach(()=>{
    sinon.restore();
  })

  // it('Retorna status 200 e a classificação das equipes corretamente', async () => {
  //   // sinon.stub(Teams, 'findAll').resolves(teamsListMock as Teams[]);
  //   sinon.stub(Matches, 'findAll').resolves(mockfindAll as unknown as Matches[]);
  //   const response = await chai.request(app).get('/leaderboard/home');
  //   expect(response.status).to.be.equal(200); 
  //   // expect(res.body).to.be.deep.eq(leaderboardMock);
  // });
});
