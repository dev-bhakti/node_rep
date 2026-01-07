'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Account.init({
    id: { type: DataTypes.INTEGER, primaryKey: true },
    account_id: DataTypes.INTEGER,
    upper_limit: DataTypes.INTEGER,
    product0: DataTypes.STRING,
    product1: DataTypes.STRING,
    product2: DataTypes.STRING,
    product3: DataTypes.STRING,
    product4: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Account',
    timestamps: false,
    tableName: 'accounts'
  });
  return Account;
};