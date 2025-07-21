const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/db.config");

class Notification extends Model {}

Notification.init(
  {
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false, // type code( 0:system, 2:study)
    },
    read: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    createAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW,
    },
  },
  {
    sequelize,
    modelName: "Notification",
    timestamps: false,
  }
);

module.exports = Notification;
