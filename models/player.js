module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
      name: {
          type: DataTypes.STRING,
          allowNull: false
      },
      // Add the rest of the stats you pick to display below.
      // Syntax is statName: {
      //                    type: DataTypes.STRING or DataTypes.Decimal,
      //                    allowNull: true
      //           },
  })
}