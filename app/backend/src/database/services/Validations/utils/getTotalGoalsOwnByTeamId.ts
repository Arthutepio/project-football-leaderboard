import IMatches from '../../../interfaces/IMatches';
import { Tfilter } from '../../../interfaces/TFilter';

const getTotalGoalsOwnByTeamId = (matches: IMatches[], id: number, filter: Tfilter) => {
  const totalGoalsOwnHome = matches.filter((match) => match.homeTeamId === id)
    .reduce((acc, curr) => curr.awayTeamGoals + acc, 0);
  if (filter === 'home') return totalGoalsOwnHome;

  const totalGoalsOwnAway = matches.filter((match) => match.awayTeamId === id)
    .reduce((acc, curr) => curr.homeTeamGoals + acc, 0);
  if (filter === 'away') return totalGoalsOwnAway;

  return totalGoalsOwnHome + totalGoalsOwnAway;
};

export default getTotalGoalsOwnByTeamId;
