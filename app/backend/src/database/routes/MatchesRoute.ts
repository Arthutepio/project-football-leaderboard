import { Router, Request, Response } from 'express';
import MatchesController from '../controllers/MatchesController';
import authorizationUser from '../middlewares/Authorization';

const matchesRouter = Router();
const matchesController = new MatchesController();

matchesRouter.get('/matches', (req: Request, res: Response) =>
  matchesController.getAllMatches(req, res));

matchesRouter.post('/matches', authorizationUser, (req: Request, res: Response) =>
  matchesController.insertMaches(req, res));

matchesRouter.patch('/matches/:id/finish', authorizationUser, (req: Request, res: Response) =>
  matchesController.finishMatchesById(req, res));

matchesRouter.patch('/matches/:id', authorizationUser, (req: Request, res: Response) =>
  matchesController.updateTeamGoals(req, res));

export default matchesRouter;
