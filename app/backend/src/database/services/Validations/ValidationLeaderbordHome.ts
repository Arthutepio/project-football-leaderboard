import Matches from '../../models/Matches';
import Teams from '../../models/Teams';
import { Tfilter } from '../../interfaces/TFilter';
import getTotalGamesByTeamId from './utils/getTotalGamesByTeamId';
import getTotalVictoriesByTeamId from './utils/getTotalVictoriesByTeamId';
import getTotalDrawsByTeamId from './utils/getTotalDrawsByTeamId';
import getTotalLossesByTeamId from './utils/getTotalLossesByTeamId';
import getTotalGoalsFavorByTeamId from './utils/getTotalGoalsFavoByTeamIdr';
import getTotalGoalsOwnByTeamId from './utils/getTotalGoalsOwnByTeamId';
import getTotalPointsByTeamId from './utils/getTotalPointsByTeamId';
import getEfficiencyByTeamId from './utils/getEfficiencyByTeamId';

const matchesArray = (matches:Matches[]) => {
  const arrayMachesFinished = matches
    .filter((match: Matches) => match.dataValues.inProgress === false);
  return arrayMachesFinished;
};

// Arthur Debiasi me ajudou
const getLeaderboardByFilter = (teams: Teams[], matches: Matches[], filter: Tfilter) => {
  const matchesFinished = matchesArray(matches);

  const arrayTeams = teams.map((team: Teams) => ({
    name: team.dataValues.teamName,
    totalPoints: getTotalPointsByTeamId(matchesFinished, team.id),
    totalGames: getTotalGamesByTeamId(matchesFinished, team.id, filter),
    totalVictories: getTotalVictoriesByTeamId(matchesFinished, team.id, filter),
    totalDraws: getTotalDrawsByTeamId(matchesFinished, team.id, filter),
    totalLosses: getTotalLossesByTeamId(matchesFinished, team.id, filter),
    goalsFavor: getTotalGoalsFavorByTeamId(matchesFinished, team.id, filter),
    goalsOwn: getTotalGoalsOwnByTeamId(matchesFinished, team.id, filter),
    goalsBalance: getTotalGoalsFavorByTeamId(matchesFinished, team.id, filter)
    - getTotalGoalsOwnByTeamId(matchesFinished, team.id, filter),
    efficiency: getEfficiencyByTeamId(matchesFinished, team.id, filter),
  }));
  // console.log('=>', matchesFinished[0]);

  return arrayTeams;
};

export default getLeaderboardByFilter;
