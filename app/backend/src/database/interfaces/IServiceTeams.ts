import Teams from '../models/Teams';

export default interface IServiceTeams {
  getAllTeams(): Promise<Teams[]>;
  getByIdTeams(id?: number): Promise<Teams | null>;
}
