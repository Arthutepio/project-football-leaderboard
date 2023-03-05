import Matches from '../models/Matches';

export default interface IServiceMatches {
  getAllMatches(): Promise<Matches[]>;
  getMatchesInProgress(inProgress: string): Promise<Matches[] | undefined>;
  getMatchesFinished(inProgress: string): Promise<Matches[] | undefined>;
  finishMatchesById(id: number): string;
  updateTeamGoals(id: number, homeGoal: number, awayGoal: number): Promise<Matches | null>;
}
