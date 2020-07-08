const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cart");

router.get("/", cartController.getAllCarts);

//router.post("/search", cartController.searchCart);

router.post("/add", cartController.addCart);

router.get("/:id", cartController.getACart);

router.get("/:id/detail", cartController.getAllCartDetails);

router.delete("/delete/:id", cartController.deleteCart);

router.get("/:cartId/updateQuantity", cartController.updateQuantityCartDetail);

module.exports = router;
