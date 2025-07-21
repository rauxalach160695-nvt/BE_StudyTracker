const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/db.config");

class Skill extends Model {}

Skill.init(
  {
    skillName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    targetLevel: {
      type: DataTypes.INTEGER,
      allowNull: false, // level code(1:basic, 2:intermediate, 3:expert)
      defaultValue: 1,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 2, // status code(0:dropped, 1:completed, 2:ongoing)
    },
    createAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW,
    },
  },
  {
    sequelize,
    modelName: "Skill",
    timestamps: false,
  }
);

module.exports = Skill