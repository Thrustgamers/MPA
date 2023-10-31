'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {

    await queryInterface.bulkInsert('Lists', [
      {
        owner: 1,
        name: 'playlist 1',
        songs : [
          1,
          2,
          3,
          4,
          5,
          6
        ]
      },
      {
        owner: 1,
        name: 'playlist 2',
        songs : [
          6,
          5,
          4,
          3,
          2,
          1
        ]
      },

    ], {});

  },
};
