'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Department extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Department.init({
    id: {type: DataTypes.INTEGER, primaryKey: true},
    dept_id: DataTypes.INTEGER,
    dept_name: DataTypes.STRING,
    manager_id: DataTypes.INTEGER,
    manager_firstname: DataTypes.STRING,
    manager_lastname: DataTypes.STRING,
    manager_joining_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Department',
    timestamps: false,
    tableName: 'departments'
  });
  return Department;
};