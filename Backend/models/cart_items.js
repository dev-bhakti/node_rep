'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cart_items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  cart_items.init({
     id: {type: DataTypes.INTEGER, primaryKey: true},
    cart_id: DataTypes.INTEGER,
    pizza_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    price_at_addition: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'cart_items',
    timestamps: false,
    tableName: 'cart_items'
  });
  return cart_items;
};