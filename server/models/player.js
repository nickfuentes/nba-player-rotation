'use strict';
module.exports = (sequelize, DataTypes) => {
  const Player = sequelize.define('Player', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    teamName: DataTypes.STRING,
    playerNumber: DataTypes.INTEGER,
    position: DataTypes.STRING,
    fg: DataTypes.DOUBLE,
    threep: DataTypes.DOUBLE,
    ft: DataTypes.DOUBLE,
    reb: DataTypes.DOUBLE,
    ast: DataTypes.DOUBLE,
    blk: DataTypes.DOUBLE,
    stl: DataTypes.DOUBLE,
    pf: DataTypes.DOUBLE,
    to: DataTypes.DOUBLE,
    pts: DataTypes.DOUBLE,
    photoUrl: DataTypes.STRING
  }, {});
  Player.associate = function(models) {
    // associations can be defined here
  };
  return Player;
};