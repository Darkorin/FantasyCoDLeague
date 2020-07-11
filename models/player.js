module.exports = function(sequelize, DataTypes) {
  const Player = sequelize.define("Player", {
    activisionID: {
      type: DataTypes.STRING,
      allowNull: false
    },
    kdRatio: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    wlRatio: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    scoreMinute: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    scoreGame: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    totalKills: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    mostKills: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },

  });
  return Player;
};
