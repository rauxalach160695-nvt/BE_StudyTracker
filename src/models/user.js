const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/db.config");
const bcrypt = require("bcrypt");

class User extends Model {}

User.init(
  {
    email: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING(10),
    },
    avatarId: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    role: {
      type: DataTypes.INTEGER,
      defaultValue: 0, // role code:(0:user, 1:admin)
    },
  },
  {
    sequelize,
    modelName: "User",
    timestamps: false,
    hooks: {
      beforeCreate: async (user) => {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        console.log(user.password)
      },
      beforeUpdate: async (user) => {
        if (user.changed("password")) {
          const salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(user.password, salt);
        }
      },
    },
  }
);

module.exports = User;
