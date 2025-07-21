const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/db.config");

class Avatar extends Model {}

Avatar.init(
  {
    avatarURL:{
        type: DataTypes.TEXT,
        allowNull: false
    }   
  },
  {
    sequelize,
    modelName: "Avatar",
    timestamps: false,
  },
);

module.exports = Avatar