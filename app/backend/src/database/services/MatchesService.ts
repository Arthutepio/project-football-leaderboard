import { ModelStatic } from 'sequelize';
import IServiceMatches, { successfulCase, unsuccessfulCase } from '../interfaces/IServiceMatches';

import Matches from '../models/Matches';
import Teams from '../models/Teams';

export default class MatchesService implements IServiceMatches {
  protected model: ModelStatic<Matches> = Matches;
  protected modelTeams: ModelStatic<Teams> = Teams;

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

  finishMatchesById(id: number): string {
    this.model.update(
      { inProgress: 'false' },
      { where: { id } },
    );
    return 'Finished';
  }

  async updateTeamGoals(id: number, homeGoal: number, awayGoal: number): Promise<Matches | null> {
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

  // Richard me ajudou com a lógica
  async insertMaches(
    homeTeamId: number,
    awayTeamId: number,
    homeTeamGoals: number,
    awayTeamGoals: number,
  ): Promise<unsuccessfulCase | successfulCase> {
    const isId = (await Promise.all([homeTeamId, awayTeamId]
      .map(async (id) => this.modelTeams.findByPk(id))));

    if (!isId[0] || !isId[1]) return { type: 404, message: 'There is no team with such id!' };

    if (homeTeamId === awayTeamId) {
      return { type: 422, message: 'It is not possible to create a match with two equal teams' };
    }

    const result = await this.model.create({
      homeTeamId, homeTeamGoals, awayTeamId, awayTeamGoals, inProgress: true,
    });
    return { type: null, message: result };
  }
}
