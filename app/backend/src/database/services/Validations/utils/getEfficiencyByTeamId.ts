import { Tfilter } from '../../../interfaces/TFilter';
import IMatches from '../../../interfaces/IMatches';
import getTotalGamesByTeamId from './getTotalGamesByTeamId';
import getTotalPointsByTeamId from './getTotalPointsByTeamId';

const getEfficiencyByTeamId = (matches: IMatches[], id: number, filter: Tfilter) => {
  const efficiency = (getTotalPointsByTeamId(matches, id) * 100)
  / (getTotalGamesByTeamId(matches, id, filter) * 3);

  return Number(efficiency.toFixed(2));
};

export default getEfficiencyByTeamId;
