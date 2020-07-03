const express = require("express");
const router = express.Router();
const orderController = require("../controllers/order");

router.get("/", orderController.getOrders);

router.post("/search", orderController.searchOrder);

router.post("/add", orderController.addOrder);

router.put("/update", orderController.updateOrder);

router.delete("/delete/:id", orderController.deleteOrder);

module.exports = router;
