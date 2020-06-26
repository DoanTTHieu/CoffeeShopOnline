const db = require("../models");
const Product = db.Product;
const sequelize = require("sequelize");

exports.getAllProduct = (req, res, next) => {
  Product.findAll()
    .then((products) => res.status(200).json(products))
    .catch((error) => console.log(error));
};

exports.postAddProduct = (req, res, next) => {};
