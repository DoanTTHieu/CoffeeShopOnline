const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cart");

router.get("/", cartController.getCarts);

//router.post("/search", cartController.searchCart);

router.post("/add", cartController.addCart);

router.put("/update", cartController.updateCart);

router.get("/:id", cartController.getACart);

router.delete("/delete/:id", cartController.deleteCart);

module.exports = router;
