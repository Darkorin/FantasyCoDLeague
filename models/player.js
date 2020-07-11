module.exports = function(sequelize, DataTypes) {
  const Player = sequelize.define("Player", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
 kdRatio: {
    type: DataTypes.Decimal,
    allowNull: true
 },
 wlRatio: {
  type: DataTypes.Decimal,
  allowNull: true
},
scoreMinute: {
  type: DataTypes.Decimal,
  allowNull: true
},
scoreGame: {
  type: DataTypes.Decimal,
  allowNull: true
},
totalKills: {
  type: DataTypes.Decimal,
  allowNull: true
},
mostKills: {
  type: DataTypes.Decimal,
  allowNull: true
},

  });
  return Player;
};
