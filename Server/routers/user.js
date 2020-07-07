const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

router.get("/", userController.getAllUsers);

router.get("/:id/getCart", userController.getCartOfUser);

router.get("/getUserId", userController.getUserIdByName);

//router.post("/search", userController.searchCart);

module.exports = router;
