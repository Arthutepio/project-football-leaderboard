'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('matches', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      homeTeamId: {
        field: 'home_team_id',
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key:'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE', 
      },
      homeTeamGoals: {
        field: 'home_team_goals',
        type: Sequelize.INTEGER,
      },
      awayTeamId: {
        field: 'away_team_id',
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key:'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE', 
      },
      awayTeamGoals: {
        field: 'away_team_goals',
        type: Sequelize.INTEGER,
      },
      inProgress: {
        field: 'in_progress',
        type: Sequelize.BOOL,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('matches')
  }
};
