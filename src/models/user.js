const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/db.config");

class User extends Model {}

User.init(
  {
    email: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING(10),
    },
    avatarId: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    modelName: "User",
    timestamps: false,
  }
);

module.exports = User;
