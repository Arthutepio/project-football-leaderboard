import { ModelStatic } from 'sequelize';
import ILeaderboard from '../interfaces/ILeaderboard';
// import ILeaderboardHome from '../interfaces/ILeaderboardHome';
import IServiceLeaderbordHome from '../interfaces/IServiceLeaderboardHome';
import { Tfilter } from '../interfaces/TFilter';
import Matches from '../models/Matches';
import Teams from '../models/Teams';
import getLeaderboardByFilter from './Validations/ValidationLeaderbordHome';

export default class LeaderboardHomeService implements IServiceLeaderbordHome {
  protected modelTeams: ModelStatic<Teams> = Teams;
  protected modelMatches: ModelStatic<Matches> = Matches;

  async getLeaderboard(filter: Tfilter): Promise<ILeaderboard[]> {
    const teams = await this.modelTeams.findAll();
    const matches = await this.modelMatches.findAll();
    const result = getLeaderboardByFilter(teams, matches, filter);

    return result;
  }
}
