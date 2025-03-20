'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [{
      email: 'nguyenvi@234.com',
      username: 'NgV',
      password:'123456789',
     },
     {
      email: 'email12@234.com',
      username: 'TuanVi',
      password:'1256789',
     },
     { email: 'nvi@78.com',
      username: 'Tuan Anh',
      password:'12789',},
      {
        email: 'nguyen@24.com',
        username: 'Quang Vu',
        password:'1789',
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
