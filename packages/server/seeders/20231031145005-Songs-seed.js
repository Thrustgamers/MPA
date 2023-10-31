'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {

    await queryInterface.bulkInsert('Songs', [
      {
        category: 1,
        name: 'test 1',
      },
      {
        category: 1,
        name: 'test 2',
      },
      {
        category: 1,
        name: 'test 3',
      },
      {
        category: 2,
        name: 'test 4',
      },
      {
        category: 2,
        name: 'test 5',
      },
      {
        category: 2,
        name: 'test 6',
      },

    ], {});

  },
};
