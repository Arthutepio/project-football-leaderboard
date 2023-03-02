import { Router, Request, Response } from 'express';
import LoginController from '../controllers/LoginController';

const loginRouter = Router();
const loginController = new LoginController();

loginRouter.post('/login', (req: Request, res: Response) => loginController.verifyLogin(req, res));

export default loginRouter;
