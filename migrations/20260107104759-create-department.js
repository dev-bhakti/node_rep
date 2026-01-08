'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Departments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dept_id: {
        type: Sequelize.INTEGER
      },
      dept_name: {
        type: Sequelize.STRING
      },
      manager_id: {
        type: Sequelize.INTEGER
      },
      manager_firstname: {
        type: Sequelize.STRING
      },
      manager_lastname: {
        type: Sequelize.STRING
      },
      manager_joining_date: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Departments');
  }
};