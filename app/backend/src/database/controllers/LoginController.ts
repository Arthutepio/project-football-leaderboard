import { Request, Response } from 'express';

import IServiceUser from '../interfaces/IServiceUser';
import LoginService from '../services/LoginService';

export default class LoginController {
  private _loginService: IServiceUser;

  constructor(loginService: IServiceUser = new LoginService()) {
    this._loginService = loginService;
  }

  async verifyLogin(req: Request, res: Response) {
    const { email, password } = req.body;
    const { type, message } = await this._loginService.verifyLogin(email, password);

    if (type) return res.status(type).json({ message });

    return res.status(200).json({ token: message });
  }

  async authorization(req: Request, res: Response) {
    const token = req.headers.authorization;

    const role = await this._loginService.authorization(token);
    return res.status(200).json(role);
  }
}
