'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {

    await queryInterface.bulkInsert('Lists', [
      {
        owner: 1,
        name: 'playlist 1',
        songs : "1,2,3,4,5,6"
      },
      {
        owner: 1,
        name: 'playlist 2',
        songs : "1,2,3,4,5,6"
      },
      {
        owner: 1,
        name: 'playlist 3',
        songs : "1,2,3,4,5,6"
      },
      {
        owner: 1,
        name: 'playlist 4',
        songs : "1,2,3,4,5,6"
      },
      {
        owner: 1,
        name: 'playlist 5',
        songs : "1,2,3,4,5,6"
      },
      {
        owner: 1,
        name: 'playlist 6',
        songs : "1,2,3,4,5,6"
      },
      {
        owner: 1,
        name: 'playlist 7',
        songs : "1,2,3,4,5,6"
      },
      {
        owner: 1,
        name: 'playlist 8',
        songs : "1,2,3,4,5,6"
      },

    ], {});

  },
};
