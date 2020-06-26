"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Product",
      [
        {
          title: "Cappuccino",
          stock: 2,
          description: "Amazing",
          type: "Coffee",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/c/c8/Cappuccino_at_Sightglass_Coffee.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Cookie",
          stock: 3,
          description: "Wonderful",
          type: "coffee",
          imageUrl:
            "https://www.simplystacie.net/wp-content/uploads/2016/06/choc-chip-cookie-coffee-4-1.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Oreo",
          stock: 3,
          description: "Wonderful",
          type: "coffee",
          imageUrl:
            "https://img.food.boxspace.in/image/rbk_5bc71622d61e4/xhdpi.jpg",
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
    return queryInterface.bulkDelete("Product", null, {});
  },
};
