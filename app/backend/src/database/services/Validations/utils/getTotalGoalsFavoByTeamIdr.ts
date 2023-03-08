import { Tfilter } from '../../../interfaces/TFilter';
import IMatches from '../../../interfaces/IMatches';

const getTotalGoalsFavorByTeamId = (matches: IMatches[], id: number, filter: Tfilter) => {
  const totalGoalsHome = matches.filter((match) => match.homeTeamId === id)
    .reduce((acc, curr) => curr.homeTeamGoals + acc, 0);
  if (filter === 'home') return totalGoalsHome;

  const totalGoalsAway = matches.filter((match) => match.awayTeamId === id)
    .reduce((acc, curr) => curr.awayTeamGoals + acc, 0);
  if (filter === 'away') return totalGoalsAway;

  return totalGoalsHome + totalGoalsAway;
};

export default getTotalGoalsFavorByTeamId;
