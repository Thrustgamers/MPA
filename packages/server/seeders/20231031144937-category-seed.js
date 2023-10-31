'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {

    await queryInterface.bulkInsert('Lists', [
      { name: "Blues" },
      { name: "Country" },
      { name: "Easy listening" },
      { name: "Electronic" },
      { name: "Folk" },
    ], {});

  },
};
