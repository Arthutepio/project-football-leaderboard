import { Router, Request, Response } from 'express';
import LeaderboardHomeController from '../controllers/LeaderboardHomeController';

const leaderboardHomeRouter = Router();
const leaderboardHomeController = new LeaderboardHomeController();

leaderboardHomeRouter.get('/leaderboard/home', (req: Request, res: Response) =>
  leaderboardHomeController.leaderboardHome(req, res));

leaderboardHomeRouter.get('/leaderboard/away', (req: Request, res: Response) =>
  leaderboardHomeController.leaderboardAway(req, res));

leaderboardHomeRouter.get('/leaderboard', (req: Request, res: Response) =>
  leaderboardHomeController.leaderboard(req, res));

export default leaderboardHomeRouter;
