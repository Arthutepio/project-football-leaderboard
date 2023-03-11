import * as sinon from 'sinon';
import * as chai from 'chai';
import * as jwt from 'jsonwebtoken';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import { tokenMock, userModel, validLoginMock } from './mocks/loginMock';
import Users from '../database/models/Users';
import LoginService from '../database/services/LoginService';

chai.use(chaiHttp);
const { expect } = chai;

describe('Testes para a rota Login', function () {
  afterEach(function () {
    sinon.restore();
  })

  it('Deve realizar login e rotornar um token', async function () {
    sinon.stub(Users, 'findOne').resolves(userModel as Users)

    const response = await chai.request(app).post('/login').send(validLoginMock);
    expect(response.status).to.be.equal(200);
    // expect(response.body).to.be.deep.equal({token: tokenMock})
  });

  it('Em caso de login incorreto, retorna um erro', async function () {
  
    const response = await chai.request(app).post('/login').send({
      email: "admin@admin.com",
      password: "xablau"
    });
    expect(response.status).to.be.equal(401);
    // expect(response.body).to.be.equal({
    //   message: "Invalid email or password"
    // })
  })

});