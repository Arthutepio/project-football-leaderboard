import Matches from '../models/Matches';

export default interface IServiceMatches {
  getAllMatches(): Promise<Matches[]>;
}
