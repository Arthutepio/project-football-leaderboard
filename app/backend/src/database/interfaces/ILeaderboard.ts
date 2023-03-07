export default interface ILeaderboard {
  name: string;
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number | undefined;
  goalsOwn: number;
  goalsBalance: number;
  efficiency: number;
}
