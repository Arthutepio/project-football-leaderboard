import IMatches from '../../../interfaces/IMatches';
import getTotalVictoriesByTeamId from './getTotalVictoriesByTeamId';
import getTotalDrawsByTeamId from './getTotalDrawsByTeamId';
import { Tfilter } from '../../../interfaces/TFilter';

const getTotalPointsByTeamId = (matches: IMatches[], id: number, filter: Tfilter) => {
  const totalPoints = (getTotalVictoriesByTeamId(matches, id, filter) * 3)
   + getTotalDrawsByTeamId(matches, id, filter);

  return totalPoints;
};

export default getTotalPointsByTeamId;
