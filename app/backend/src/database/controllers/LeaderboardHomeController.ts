import { Request, Response } from 'express';
import IServiceLeaderbordHome from '../interfaces/IServiceLeaderboardHome';
import LeaderboardHomeService from '../services/LeaderboardHomeService';

export default class LeaderboardHomeController {
  private _leaderbordHomeService: IServiceLeaderbordHome;

  constructor(leaderbordHomeService: IServiceLeaderbordHome = new LeaderboardHomeService()) {
    this._leaderbordHomeService = leaderbordHomeService;
  }

  async leaderboardHome(_req: Request, res: Response) {
    const result = await this._leaderbordHomeService.getLeaderboard('home');

    return res.status(200).json(result);
  }

  async leaderboardAway(_req: Request, res: Response) {
    const result = await this._leaderbordHomeService.getLeaderboard('away');

    return res.status(200).json(result);
  }

  async leaderboard(_req: Request, res: Response) {
    const result = await this._leaderbordHomeService.getLeaderboard(undefined);

    return res.status(200).json(result);
  }
}
