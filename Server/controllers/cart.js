const db = require("../models");
const sequelize = require("sequelize");

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
      if (!cart) {
        res.status(400).json("Cannot find any cart");
      }
      res.status(200).json(cart);
      next();
    })
    .catch((err) => {
      if (!err.status) statusCode = 500;
      next(err);
    });
};

module.exports.getAllCartDetails = function (req, res, next) {
  const cartId = req.params.id;

  db.sequelize
    .query(
      `SELECT * FROM cartdetail as cd, product as p WHERE cd.cartId=${cartId} AND cd.productId=p.id`,
      {
        type: sequelize.QueryTypes.SELECT,
      }
    )
    .then((result) => {
      res.json({ id: cartId, detail: result });
    });
};

module.exports.updateQuantityCartDetail = function (req, res, next) {
  const choice = req.query.choice;
  const cartId = req.params.cartId;
  const productId = req.query.productId;

  if (choice === "inc") {
    CartDetail.findOne({
      where: {
        [Op.and]: [
          {
            productId: productId,
          },
          {
            cartId: cartId,
          },
        ],
      },
    }).then((cd) => {
      return cd
        .update({
          // price: 100000,
          quantity: sequelize.literal("quantity+1"),
        })
        .then((cd) => {
          res.status(200).json(cd);
        });
    });
  }
};

module.exports.pay = function (req, res, next) {
  CartDetail.findAll({
    where: {
      cartId: req.body.userId,
    },
  })
    .then((cartDetails) => {
      cartDetails.forEach((item) => {
        item.destroy();
      });
    })
    .then(() => {
      res.redirect(307, "/order/add");
    })
    .catch((err) => {
      if (!err.status) err.statusCode = 500;
      next(err);
    });
};
