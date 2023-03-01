import { Request, Response } from 'express';
import IServiceTeams from '../interfaces/IServiceTeams';
import TeamsService from '../services/TeamsService';

export default class TeamsController {
  private _teamsService: IServiceTeams;

  constructor(teamsService: IServiceTeams = new TeamsService()) {
    this._teamsService = teamsService;
  }

  async getAllTeams(_req: Request, res: Response) {
    const teams = await this._teamsService.getAllTeams();

    return res.status(200).json(teams);
  }
}
