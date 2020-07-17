module.exports = function(sequelize, DataTypes) {
  const Player = sequelize.define(
    "Player",
    {
      activisionId: {
        type: DataTypes.STRING,
        allowNull: false
      },
      displayName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      kdRatio: {
        type: DataTypes.DECIMAL(3, 2),
        allowNull: false
      },
      wlRatio: {
        type: DataTypes.DECIMAL(3, 2),
        allowNull: false
      },
      scoreMinute: {
        type: DataTypes.DECIMAL(6, 2),
        allowNull: false
      },
      scoreGame: {
        type: DataTypes.DECIMAL(7, 2),
        allowNull: false
      },
      totalKills: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      mostKills: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      accuracy: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false
      }
    },
    {
      underscored: true
    }
  );
  return Player;
};
