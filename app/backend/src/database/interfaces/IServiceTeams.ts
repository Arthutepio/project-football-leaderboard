import Teams from '../models/Teams';

export default interface IServiceTeams {
  getAllTeams(): Promise<Teams[]>;
}
