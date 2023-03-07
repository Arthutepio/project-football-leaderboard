import IMatches from '../../../interfaces/IMatches';
import { Tfilter } from '../../../interfaces/TFilter';

const getTotalLossesByTeamId = (matches: IMatches[], id: number, filter: Tfilter) => {
  const totalLossesHome = matches.filter((match) =>
    match.homeTeamId === id && match.homeTeamGoals < match.awayTeamGoals).length;
  if (filter === 'home') return totalLossesHome;

  const totalLossesAway = matches.filter((match) =>
    match.awayTeamId === id && match.awayTeamGoals < match.homeTeamGoals).length;
  if (filter === 'away') return totalLossesHome;

  return totalLossesHome + totalLossesAway;
};

export default getTotalLossesByTeamId;
