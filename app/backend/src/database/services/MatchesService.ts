import { ModelStatic } from 'sequelize';
import IServiceMatches from '../interfaces/IServiceMatches';
import Matches from '../models/Matches';
import Teams from '../models/Teams';

export default class MatchesService implements IServiceMatches {
  protected model: ModelStatic<Matches> = Matches;

  getAllMatches(): Promise<Matches[]> {
    return this.model.findAll({
      include: [
        {
          model: Teams,
          as: 'homeTeam',
          attributes: ['teamName'],
        },
        {
          model: Teams,
          as: 'awayTeam',
          attributes: ['teamName'],
        },
      ],
    });
  }
}
