'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Todo.belongsTo(models.User, {foreignKey:'usuarioId'});
      Todo.belongsToMany(models.User, {as:'ShareWith',through:'TodoShares', foreignKey:'todoId'});
    }
  }
  Todo.init({
    descricao: DataTypes.STRING,
    usuarioId: DataTypes.INTEGER,
    todoCreatedAt: DataTypes.DATE,
    todoUpdatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};