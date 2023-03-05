import { Request, Response } from 'express';
import IServiceMatches from '../interfaces/IServiceMatches';
import MatchesService from '../services/MatchesService';

export default class MatchesController {
  private _matchesService: IServiceMatches;

  constructor(matchesService: IServiceMatches = new MatchesService()) {
    this._matchesService = matchesService;
  }

  async getAllMatches(req: Request, res: Response) {
    const { inProgress } = req.query;
    if (inProgress === 'true') {
      const matchesInProgress = await this._matchesService
        .getMatchesInProgress(inProgress as string);

      return res.status(200).json(matchesInProgress);
    }
    if (inProgress === 'false') {
      const matchesInProgress = await this._matchesService
        .getMatchesFinished(inProgress as string);

      return res.status(200).json(matchesInProgress);
    }

    const matches = await this._matchesService.getAllMatches();

    return res.status(200).json(matches);
  }

  finishMatchesById(req: Request, res: Response) {
    const { id } = req.params;
    const match = this._matchesService.finishMatchesById(parseInt(id, 10));

    return res.status(200).json({ message: match });
  }

  async updateTeamGoals(req: Request, res: Response) {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    const updatedScoreboard = await this._matchesService
      .updateTeamGoals(+id, homeTeamGoals, awayTeamGoals);

    return res.status(200).json(updatedScoreboard);
  }
}
