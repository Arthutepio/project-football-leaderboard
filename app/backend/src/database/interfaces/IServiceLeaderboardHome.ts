// import Teams from '../models/Teams';
// import ILeaderboardHome from './ILeaderboardHome';
import ILeaderboard from './ILeaderboard';
import { Tfilter } from './TFilter';

export default interface IServiceLeaderbordHome {
  getLeaderboard(filter: Tfilter): Promise<ILeaderboard[]>;
}
