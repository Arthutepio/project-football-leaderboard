import { Router, Request, Response } from 'express';
import TeamsController from '../controllers/TeamsController';

const teamsRouter = Router();
const teamsController = new TeamsController();

teamsRouter.get('/teams', (req: Request, res: Response) => teamsController.getAllTeams(req, res));

teamsRouter.get('/teams/:id', (req: Request, res: Response) =>
  teamsController.getByIdTeams(req, res));

export default teamsRouter;
