'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TodoShares extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TodoShares.belongsTo(models.User, { foreignKey: 'userId' });
      TodoShares.belongsTo(models.Todo, { foreignKey: 'todoId' });
    }
  }
  TodoShares.init({
    userId: DataTypes.INTEGER,
    todoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TodoShares',
  });
  return TodoShares;
};