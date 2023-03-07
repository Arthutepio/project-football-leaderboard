import IMatches from '../../../interfaces/IMatches';
import { Tfilter } from '../../../interfaces/TFilter';

const getTotalGamesByTeamId = (matches: IMatches[], id: number, filter: Tfilter) => {
  const totalGamesHome = matches.filter((game) => game.homeTeamId === id).length;
  if (filter === 'home') return totalGamesHome;

  const totalGamesAway = matches.filter((game) => game.awayTeamId === id).length;
  if (filter === 'away') return totalGamesAway;

  return totalGamesHome + totalGamesAway;
};

export default getTotalGamesByTeamId;
