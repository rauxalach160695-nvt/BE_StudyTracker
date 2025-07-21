const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/db.config");

class Plan extends Model {}

Plan.init(
  {
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    dayStart: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    dayEnd: {
      type: DataTypes.DATE,
    },
  },
  {
    sequelize,
    modelName: "Plan",
    timestamps: false,
  }
);

module.exports = Plan;
