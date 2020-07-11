module.exports = function(sequelize, DataTypes) {
  const Player = sequelize.define("Player", {
    activisionID: {
      type: DataTypes.STRING,
      allowNull: false
    },
    kdRatio: {
      type: DataTypes.STRING,
      allowNull: false
    },
    wlRatio: {
      type: DataTypes.STRING,
      allowNull: false
    },
    scoreMinute: {
      type: DataTypes.STRING,
      allowNull: false
    },
    scoreGame: {
      type: DataTypes.STRING,
      allowNull: false
    },
    totalKills: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mostKills: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });
  return Player;
};
