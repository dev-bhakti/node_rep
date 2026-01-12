'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pizza extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pizza.init({
    pizza_name: DataTypes.STRING,
    pizza_type: DataTypes.STRING,
    pizza_price: DataTypes.INTEGER,
    pizza_id: DataTypes.INTEGER,
    image: DataTypes.STRING,
    id: {type: DataTypes.INTEGER, primaryKey: true}
  }, {
    sequelize,
    modelName: 'Pizza',
    timestamps: false,
    tableName: 'pizzas'
  });
  return Pizza;
};