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

  getMatchesInProgress(progress: string) {
    return this.model.findAll({
      where: { inProgress: progress === 'true' },
      include: [{
        model: Teams,
        as: 'homeTeam',
        attributes: ['teamName'],
      },
      {
        model: Teams,
        as: 'awayTeam',
        attributes: ['teamName'],
      }],
    });
  }

  // redundate
  getMatchesFinished(progress: string) {
    return this.model.findAll({
      where: { inProgress: progress },
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

  // pra finalizar uma partida recebe ID e fazer um UPDATE em inProgress de TRUE pra FALSE e retornar status 200 e { "message": "Finished" }
  finishMatchesById(id: number): string {
    this.model.update(
      { inProgress: 'false' },
      { where: { id } },
    );
    return 'Finished';
  }

  async updateTeamGoals(id: number, homeGoal: number, awayGoal: number): Promise<Matches | null> {
    console.log(homeGoal, awayGoal);

    await this.model.update(
      { homeTeamGoals: homeGoal, awayTeamGoals: awayGoal },
      { where: { id } },
    );
    const updatedScoreboard = await this.model.findOne({
      where: { id },
      attributes: ['homeTeamGoals', 'awayTeamGoals'],
    });
    return updatedScoreboard;
  }
}
