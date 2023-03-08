import IMatches from '../../../interfaces/IMatches';
import { Tfilter } from '../../../interfaces/TFilter';

const getTotalDrawsByTeamId = (matches: IMatches[], id: number, filter: Tfilter) => {
  const totalDrawsHome = matches.filter((match) =>
    match.homeTeamId === id && match.homeTeamGoals === match.awayTeamGoals).length;
  if (filter === 'home') return totalDrawsHome;

  const totalDrawsAway = matches.filter((match) =>
    match.awayTeamId === id && match.homeTeamGoals === match.awayTeamGoals).length;
  if (filter === 'away') return totalDrawsAway;

  return totalDrawsHome + totalDrawsAway;
};

export default getTotalDrawsByTeamId;
