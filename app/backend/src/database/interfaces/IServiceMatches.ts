import Matches from '../models/Matches';

export interface unsuccessfulCase {
  type: number;
  message: string;
}

export interface successfulCase {
  type: null;
  message: Matches;
}

export default interface IServiceMatches {
  getAllMatches(): Promise<Matches[]>;
  getMatchesInProgress(inProgress: string): Promise<Matches[] | undefined>;
  finishMatchesById(id: number): string;
  updateTeamGoals(id: number, homeGoal: number, awayGoal: number): Promise<Matches | null>;
  insertMaches(homeTeamId: number, awayTeamId: number,
    homeTeamGoals: number, awayTeamGoals: number): Promise<unsuccessfulCase | successfulCase>;
}
