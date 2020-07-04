const db = require("../models");
const sequelize = require("sequelize");
const { body } = require("express-validator");
const Order = db.Order;
const Product = db.Product;
const OrderDetail = db.OrderDetail;
const Op = sequelize.Op;

// Total
module.exports.getOrders = function (req, res) {
  Order.findAll()
    .then((orders) => res.status(200).json(orders))
    .catch((err) => {
      if (!err.status) err.statusCode = 500;
      next(err);
    });
};

module.exports.getTotalOrders = function (req, res) {
  Order.count()
    .then((total) => res.status(200).json(total.toString()))
    .catch((err) => {
      if (!err.status) err.statusCode = 500;
      next(err);
    });
};

module.exports.getTotalOrdersInPeriod = function (req, res) {
  const dateFrom = req.body.dateFrom;
  const dateTo = req.body.dateTo;
  Order.count({
    where: {
      [Op.between]: [dateFrom, dateTo],
    },
  })
    .then((total) => res.status(200).json(total.toString()))
    .catch((err) => {
      if (!err.status) err.statusCode = 500;
      next(err);
    });
};

module.exports.getTotalOrdersThisMonth = function (req, res) {
  const month = req.body.month;
  const year = req.body.year;
  Order.count({
    where: {
      $and: [
        sequelize.where(
          sequelize.fn("month", sequelize.col("orderDate")),
          month
        ),
        sequelize.where(sequelize.fn("year", sequelize.col("orderDate")), year),
        // Chưa test, chưa chắc lắm
      ],
    },
  })
    .then((total) => res.status(200).send(total.toString()))
    .catch((err) => {
      if (!err.status) err.statusCode = 500;
      next(err);
    });
};

module.exports.getTotalOrdersThisYear = function (req, res) {
  const year = req.body.year;
  Order.count({
    where: {
      // Chưa test, chưa chắc lắm
      $where: [
        sequelize.where(sequelize.fn("year", sequelize.col("orderDate")), year),
      ],
    },
  })
    .then((total) => res.status(200).send(total.toString()))
    .catch((err) => {
      if (!err.status) err.statusCode = 500;
      next(err);
    });
};
// Search & Filter
module.exports.searchOrder = function (req, res) {};

module.exports.filterByDate = function (req, res) {};

module.exports.addOrder = function (req, res) {
  const savedOrder = Order.create({
    userId: req.body.userId,
    status: 0,
    discount: 0.2,
    orderDate: new Date(),
  })
    .then((order) => {
      req.body.products.forEach((item) => {
        Product.findOne({
          where: { id: parseInt(item.id) },
        }).then((product) => {
          if (!product) {
            return res.status(400);
          }
          const orderDetail = OrderDetail.create({
            orderId: order.id,
            productId: item.id,
            quantity: item.quantity,
            price: product.price,
          });
        });
      });
      return res.status(200).json(order);
    })
    .catch((err) => {
      if (!err.status) err.statusCode = 500;
      next(err);
    });
};

module.exports.updateOrder = function (req, res) {};

module.exports.deleteOrder = function (req, res) {
  Order.findOne({
    where: { id: parseInt(req.params.id) },
  })
    .then((order) => {
      if (!order) {
        res.status(400).json("Order does not exists");
      }
      return order.destroy();
    })
    .then((deletedOrder) => {
      res.status(200).json({
        message: "Delete successful!",
        deletedOrder: deletedOrder,
      });
    })
    .catch((err) => {
      if (!err.status) {
        err.statusCode = 500;
      }
      next(err);
    });
};

module.exports.getAnOrder = function (req, res) {
  Order.findOne({
    where: { id: req.params.id },
  })
    .then((order) => {
      if (order) {
        res.status(200).json(order);
      }
      next();
    })
    .catch((err) => {
      if (!err.status) statusCode = 500;
      next(err);
    });
};

module.exports.getMaxIDOrder = function (req, res) {
  // ????
};

module.exports.finalizedOrder = function (req, res) {};

module.exports.abortedOrder = function (req, res) {};

// INCOME
module.exports.getThisMonthIncome = function (req, res) {};

module.exports.getYearIncome = function (req, res) {};
