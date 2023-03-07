import IMatches from '../../../interfaces/IMatches';
import getTotalVictoriesByTeamId from './getTotalVictoriesByTeamId';
import getTotalDrawsByTeamId from './getTotalDrawsByTeamId';

const getTotalPointsByTeamId = (matches: IMatches[], id: number) => {
  const totalPoints = (getTotalVictoriesByTeamId(matches, id, undefined) * 3)
   + getTotalDrawsByTeamId(matches, id, undefined);

  return totalPoints;
};

export default getTotalPointsByTeamId;
