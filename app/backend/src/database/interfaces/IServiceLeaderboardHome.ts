// import Teams from '../models/Teams';
// import ILeaderboardHome from './ILeaderboardHome';
import { Tfilter } from './TFilter';

export default interface IServiceLeaderbordHome {
  getLeaderboard(filter: Tfilter): void;
}
