module.exports = function(sequelize, DataTypes) {
  const Draft = sequelize.define("Draft", {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    p1Display: {
      type: DataTypes.STRING,
      allowNull: false
    },
    p1d1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    p1d2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    p1d3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    p2Display: {
      type: DataTypes.STRING,
      allowNull: false
    },
    p2d1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    p2d2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    p2d3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    p3Display: {
      type: DataTypes.STRING,
      allowNull: false
    },
    p3d1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    p3d2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    p3d3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    p4Display: {
      type: DataTypes.STRING,
      allowNull: false
    },
    p4d1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    p4d2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    p4d3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    p5Display: {
      type: DataTypes.STRING,
      allowNull: false
    },
    p5d1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    p5d2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    p5d3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    p6Display: {
      type: DataTypes.STRING,
      allowNull: false
    },
    p6d1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    p6d2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    p6d3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    p7Display: {
      type: DataTypes.STRING,
      allowNull: false
    },
    p7d1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    p7d2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    p7d3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    p8Display: {
      type: DataTypes.STRING,
      allowNull: false
    },
    p8d1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    p8d2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    p8d3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    currentTurn: {
      type: DataTypes.STRING,
      allowedNull: false
    }
  }, {
    underscored: true
  });
  return Draft;
};