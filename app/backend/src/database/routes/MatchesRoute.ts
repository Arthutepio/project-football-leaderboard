import { Router, Request, Response } from 'express';
import MatchesController from '../controllers/MatchesController';

const matchesRouter = Router();
const matchesController = new MatchesController();

matchesRouter.get('/matches', (req: Request, res: Response) =>
  matchesController.getAllMatches(req, res));

export default matchesRouter;
