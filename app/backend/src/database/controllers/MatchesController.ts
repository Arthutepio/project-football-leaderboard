import { Request, Response } from 'express';
import IServiceMatches from '../interfaces/IServiceMatches';
import MatchesService from '../services/MatchesService';

export default class MatchesController {
  private _matchesService: IServiceMatches;

  constructor(matchesService: IServiceMatches = new MatchesService()) {
    this._matchesService = matchesService;
  }

  async getAllMatches(_req: Request, res: Response) {
    const matches = await this._matchesService.getAllMatches();

    return res.status(200).json(matches);
  }
}
