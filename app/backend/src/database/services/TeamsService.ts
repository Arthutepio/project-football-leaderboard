import { ModelStatic } from 'sequelize';
import IServiceTeams from '../interfaces/IServiceTeams';
import Teams from '../models/Teams';

export default class TeamsService implements IServiceTeams {
  protected model: ModelStatic<Teams> = Teams;

  async getAllTeams(): Promise<Teams[]> {
    return this.model.findAll();
  }
}
