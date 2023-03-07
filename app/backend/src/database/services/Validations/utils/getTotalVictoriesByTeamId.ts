import IMatches from '../../../interfaces/IMatches';
import { Tfilter } from '../../../interfaces/TFilter';

const getTotalVictoriesByTeamId = (matches: IMatches[], id: number, filter: Tfilter) => {
  const totalVictoriesHome = matches.filter((match) =>
    match.homeTeamId === id && match.homeTeamGoals > match.awayTeamGoals).length;
  if (filter === 'home') return totalVictoriesHome;

  const totalVictoriesAway = matches.filter((match) =>
    match.awayTeamId === id && match.homeTeamGoals < match.awayTeamGoals).length;
  if (filter === 'away') return totalVictoriesAway;

  return totalVictoriesHome + totalVictoriesAway;
};

export default getTotalVictoriesByTeamId;
