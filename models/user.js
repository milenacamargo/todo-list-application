'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
      User.hasMany(models.Todo,{ foreignKey: 'usuarioId'});
      User.belongsToMany(models.Todo,{ as: 'SharedTodos', through:'TodoShares', foreignKey: 'userId'});
    }
  }
  User.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt:  {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    }
    }, {
    sequelize,
    modelName: 'User',
    timestamps: true,  // Ativa os timestamps automáticos
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  });
  return User;
};
