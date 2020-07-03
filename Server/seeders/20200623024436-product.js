"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Product",
      [
        {
          title: "Cappuccino",
          available: true,
          description: "Amazing",
          type: "Coffee",
          price: 30000,
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/c/c8/Cappuccino_at_Sightglass_Coffee.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Cookie",
          available: false,
          description: "Wonderful",
          type: "coffee",
          price: 35000,
          imageUrl:
            "https://www.simplystacie.net/wp-content/uploads/2016/06/choc-chip-cookie-coffee-4-1.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Oreo",
          available: true,
          description: "Wonderful",
          type: "coffee",
          price: 38000,
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
