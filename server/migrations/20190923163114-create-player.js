"use strict"
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Players", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      teamName: {
        type: Sequelize.STRING
      },
      playerNumber: {
        type: Sequelize.INTEGER
      },
      position: {
        type: Sequelize.STRING
      },
      fg: {
        type: Sequelize.DOUBLE
      },
      threep: {
        type: Sequelize.DOUBLE
      },
      ft: {
        type: Sequelize.DOUBLE
      },
      reb: {
        type: Sequelize.DOUBLE
      },
      ast: {
        type: Sequelize.DOUBLE
      },
      blk: {
        type: Sequelize.DOUBLE
      },
      stl: {
        type: Sequelize.DOUBLE
      },
      pf: {
        type: Sequelize.DOUBLE
      },
      to: {
        type: Sequelize.DOUBLE
      },
      pts: {
        type: Sequelize.DOUBLE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Players")
  }
}
