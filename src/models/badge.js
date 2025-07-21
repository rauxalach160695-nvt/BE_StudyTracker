const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/db.config");

class Badge extends Model {}

Badge.init(
  {
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    icon: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    earAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW,
    },
  },
  {
    sequelize,
    modelName: "Badge",
    timestamps: false,
  }
);

module.exports = Badge;
