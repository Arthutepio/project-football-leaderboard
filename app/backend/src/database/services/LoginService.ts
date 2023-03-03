import * as jwt from 'jsonwebtoken';
import { ModelStatic } from 'sequelize';
import * as bcrypt from 'bcryptjs';
import IServiceUser from '../interfaces/IServiceUser';
import Users from '../models/Users';
import validateLogin from './Validations/ValitationLogin';

const secret: string = process.env.JWT_SECRET || 'jwt_secret';
const messageError = 'Invalid email or password';

export default class LoginService implements IServiceUser {
  protected model: ModelStatic<Users> = Users;

  public createToken = (email: string) => jwt.sign({ email }, secret, {
    algorithm: 'HS256',
    expiresIn: '30d',
  }); // criar um diretório utils

  public decodeToken = (token: string) => jwt.verify(token, secret) as jwt.JwtPayload;

  async authorization(token: string): Promise<Users | null> {
    const result = this.decodeToken(token);

    const role = await this.model.findOne({
      attributes: ['role'],
      where: { email: result.email },
    });
    return role;
  }

  async verifyLogin(email: string, password: string): Promise<{
    type: number | null;
    message: string;
  }> {
    if (!email || !password) {
      return { type: 400, message: 'All fields must be filled' };
    }

    const error = validateLogin(email, password);
    if (error) return { type: 401, message: messageError };

    const user = await this.model.findOne({
      where: { email },
    });

    if (!user) return { type: 401, message: messageError };

    const verifyPassword = bcrypt.compareSync(password, user?.password as string);
    if (!verifyPassword) {
      return { type: 401, message: messageError };
    }

    const token = this.createToken(email);

    return { type: null, message: token };
  }
}
