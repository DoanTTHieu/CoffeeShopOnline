const db = require("../models");
const sequelize = require("sequelize");
const { body } = require("express-validator");
const Cart = db.Cart;
const Product = db.Product;
const CartDetail = db.CartDetail;
const Op = sequelize.Op;

// Total
module.exports.getAllCarts = function (req, res, next) {
  Cart.findAll()
    .then((carts) => res.status(200).json(carts))
    .catch((err) => {
      if (!err.status) err.statusCode = 500;
      next(err);
    });
};

module.exports.addCart = function (req, res, next) {
  Cart.create({
    userId: 2,
    pay: false,
  })
    .then((cart) => {
      req.body.products.forEach((item) => {
        Product.findOne({
          where: { id: parseInt(item.id) },
        }).then((product) => {
          if (!product) {
            return res.status(400);
          }
          CartDetail.create({
            cartId: cart.id,
            productId: item.id,
            quantity: item.quantity,
            price: product.price,
          });
        });
      });
      return res.status(200).json(cart);
    })
    .catch((err) => {
      if (!err.status) err.statusCode = 500;
      next(err);
    });
};

module.exports.updateCart = function (req, res) {};

module.exports.deleteCart = function (req, res, next) {
  Cart.findOne({
    where: { id: parseInt(req.params.id) },
  })
    .then((cart) => {
      if (!cart) {
        res.status(400).json("Cart does not exists");
      }
      return cart.destroy();
    })
    .then((deletedCart) => {
      res.status(200).json({
        message: "Delete successful!",
        deletedCart: deletedCart,
      });
    })
    .catch((err) => {
      if (!err.status) {
        err.statusCode = 500;
      }
      next(err);
    });
};

module.exports.getACart = function (req, res, next) {
  Cart.findOne({
    where: { id: req.params.id },
  })
    .then((cart) => {
      if (cart) {
        res.status(200).json(cart);
      }
      next();
    })
    .catch((err) => {
      if (!err.status) statusCode = 500;
      next(err);
    });
};

module.exports.getAllCartDetails = function (req, res, next) {
  const cartId = req.params.id;

  CartDetail.findAll({
    where: {
      cartId: cartId,
    },
  }).then((cartDetails) => {
    res.status(200).json(cartDetails);
  });
};

// module.exports.adjustQuantity = function (req, res, next) {
//   const cartId = req.params.id;
//   const productId = req.
//   const modifyChoice = req.params.modify;

//   if (modifyChoice === "increase") {
//     CartDetail.decrement("quantity", { where: { id: cartDetailId } })
//       .then((orderDetail) => {
//         res.status(200).json(orderDetail);
//       })
//       .catch((err) => {
//         if (!err.status) {
//           err.statusCode = 500;
//         }
//         next(err);
//       });
//   } else if (modifyChoice === "decrease") {
//     CartDetail.increase("quantity", { where: { id: cartDetailId } })
//       .then((orderDetail) => {
//         res.status(200).json(orderDetail);
//       })
//       .catch((err) => {
//         if (!err.status) {
//           err.statusCode = 500;
//         }
//         next(err);
//       });
//   }
// };