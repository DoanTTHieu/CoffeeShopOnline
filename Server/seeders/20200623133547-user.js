"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "User",
      [
        {
          username: "chuong123",
          password: "123",
          email: "chuong@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "hieu456",
          password: "456",
          email: "hieu@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "sinh789",
          password: "789",
          email: "sinh@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
};
