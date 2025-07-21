const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/db.config");

class Resource extends Model {}

Resource.init(
  {
    linkURL: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Resource",
    timestamps: false,
  }
);

module.exports = Resource;
