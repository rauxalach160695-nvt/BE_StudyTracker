const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/db.config");

class ProgessLog extends Model {}

ProgessLog.init(
  {
    date: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW,
    },
    duration: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    note: {
      type: DataTypes.TEXT,
    },
    percentageDone: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "ProgessLog",
    timestamps: false,
  }
);

module.exports = ProgessLog;
