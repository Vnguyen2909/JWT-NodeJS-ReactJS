'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class User extends Model {
    static associate(models) {
      // Define associations here (nếu cần)
    }
  }
  
  // Object Relational Mapping
  User.init(
    {
      email: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,  
      modelName: 'User',
      timestamps: true,  // Sequelize sẽ tự động thêm createdAt và updatedAt
    }
  );

  return User;
};
