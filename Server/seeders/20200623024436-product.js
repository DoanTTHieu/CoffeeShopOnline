"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Product",
      [
        {
          title: "Americano",
          available: true,
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
          type: "Coffee",
          price: 30000,
          imageUrl:
            "https://see.news/wp-content/uploads/2018/10/a-woman-holding-a-cup-of-coffee.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Cappuccino",
          available: true,
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
          type: "Coffee",
          price: 33000,
          imageUrl:
            "https://see.news/wp-content/uploads/2018/10/a-woman-holding-a-cup-of-coffee.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Macchiato",
          available: true,
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
          type: "Coffee",
          price: 35000,
          imageUrl:
            "https://see.news/wp-content/uploads/2018/10/a-woman-holding-a-cup-of-coffee.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Express",
          available: true,
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
          type: "Coffee",
          price: 30000,
          imageUrl:
            "https://see.news/wp-content/uploads/2018/10/a-woman-holding-a-cup-of-coffee.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Mocha",
          available: true,
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
          type: "Coffee",
          price: 38000,
          imageUrl:
            "https://see.news/wp-content/uploads/2018/10/a-woman-holding-a-cup-of-coffee.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Hot chocolate",
          available: true,
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
          type: "Hot drink",
          price: 40000,
          imageUrl:
            "https://see.news/wp-content/uploads/2018/10/a-woman-holding-a-cup-of-coffee.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "White chocolate",
          available: true,
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
          type: "Hot drink",
          price: 36000,
          imageUrl:
            "https://see.news/wp-content/uploads/2018/10/a-woman-holding-a-cup-of-coffee.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Green tea",
          available: true,
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
          type: "Hot drink",
          price: 30000,
          imageUrl:
            "https://see.news/wp-content/uploads/2018/10/a-woman-holding-a-cup-of-coffee.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Vanilla",
          available: true,
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
          type: "Ice blended",
          price: 33000,
          imageUrl:
            "https://see.news/wp-content/uploads/2018/10/a-woman-holding-a-cup-of-coffee.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Caramel",
          available: true,
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
          type: "Ice blended",
          price: 32000,
          imageUrl:
            "https://see.news/wp-content/uploads/2018/10/a-woman-holding-a-cup-of-coffee.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Oreo",
          available: true,
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
          type: "Ice blended",
          price: 32000,
          imageUrl:
            "https://see.news/wp-content/uploads/2018/10/a-woman-holding-a-cup-of-coffee.jpg",
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
