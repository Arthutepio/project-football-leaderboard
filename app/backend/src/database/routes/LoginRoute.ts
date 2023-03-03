import { Router, Request, Response } from 'express';
import LoginController from '../controllers/LoginController';
import authorizationUser from '../middlewares/Authorization';

const loginRouter = Router();
const loginController = new LoginController();

loginRouter.get('/login/role', authorizationUser, (req: Request, res: Response) =>
  loginController.authorization(req, res));

loginRouter.post('/login', (req: Request, res: Response) => loginController.verifyLogin(req, res));

export default loginRouter;
