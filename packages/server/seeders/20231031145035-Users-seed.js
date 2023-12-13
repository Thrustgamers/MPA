'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {

    await queryInterface.bulkInsert('Users', [
      {
        email: 'test@example.com',
        password: 'test',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'Susan@Stark.com',
        password: 'test',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
    
  },
};
