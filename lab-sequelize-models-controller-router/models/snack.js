'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Snack extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Snack.init({
    title: DataTypes.STRING,
    category: DataTypes.STRING,
    healthiness: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Snack',
  });
  return Snack;
};