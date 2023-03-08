import { ModelStatic } from 'sequelize';
import ILeaderboard from '../interfaces/ILeaderboard';
import IServiceLeaderbordHome from '../interfaces/IServiceLeaderboardHome';
import { Tfilter } from '../interfaces/TFilter';
import Matches from '../models/Matches';
import Teams from '../models/Teams';
import sortTeamRanking from './Validations/utils/sortTeamRanking';
import getLeaderboardByFilter from './Validations/ValidationLeaderbordHome';

export default class LeaderboardHomeService implements IServiceLeaderbordHome {
  protected modelTeams: ModelStatic<Teams> = Teams;
  protected modelMatches: ModelStatic<Matches> = Matches;

  async getLeaderboard(filter: Tfilter): Promise<ILeaderboard[]> {
    const teams = await this.modelTeams.findAll();
    const matches = await this.modelMatches.findAll();
    const ranking = getLeaderboardByFilter(teams, matches, filter);

    return sortTeamRanking(ranking);
  }
}
