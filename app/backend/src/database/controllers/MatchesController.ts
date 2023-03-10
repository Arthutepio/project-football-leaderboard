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
    const matchesInProgress = await this._matchesService.getMatchesInProgress(inProgress as string);

    if (inProgress) {
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

  async insertMaches(req: Request, res: Response) {
    const { homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals } = req.body;

    const { type, message } = await this._matchesService
      .insertMaches(homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals);
    if (type) return res.status(type).json({ message });

    return res.status(201).json(message);
  }
}
