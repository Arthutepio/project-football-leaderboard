import Matches from '../models/Matches';

export default interface IServiceMatches {
  getAllMatches(): Promise<Matches[]>;
  getMatchesInProgress(inProgress: string): Promise<Matches[] | undefined>;
  getMatchesFinished(inProgress: string): Promise<Matches[] | undefined>;
}
