'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // Define associations here (nếu cần)
    }
  }
  //object realtion mapping
  User.init(
    {
      email: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      timestamps: true,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
