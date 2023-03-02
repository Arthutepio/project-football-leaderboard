import * as jwt from 'jsonwebtoken';
import { ModelStatic } from 'sequelize';
import IServiceUser from '../interfaces/IServiceUser';
import Users from '../models/Users';

const secret: string = process.env.JWT_SECRET || 'jwt_secret';

export default class LoginService implements IServiceUser {
  protected model: ModelStatic<Users> = Users;

  public createToken = (email: string) => jwt.sign({ email }, secret, {
    algorithm: 'HS256',
    expiresIn: '30d',
  }); // criar um diretório utils

  async verifyLogin(email: string, password: string): Promise<{
    type: number | null;
    message: string;
  }> {
    if (!email || !password) {
      return { type: 400, message: 'All fields must be filled' };
    }

    const token = this.createToken(email);

    return { type: null, message: token };
  }
}
