"use strict";
module.exports = (sequelize, DataTypes) => {
  const options = {
    tableName: "Product",
    comment: "",
    indexes: [],
  };
  const Product = sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    options
  );
  Product.associate = function (models) {
    // associations can be defined here
  };
  return Product;
};
