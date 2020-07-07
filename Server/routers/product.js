const ProductController = require("../controllers/product");
const express = require("express");
const router = express.Router();

router.get("/", ProductController.getAllProducts);

router.post("/add", ProductController.addProduct);

router.put("/update", ProductController.updateProduct);

router.delete("/delete/:id", ProductController.deleteProductById);

router.get("/:id", ProductController.getAProduct);

router.post("/:id/addToCart", ProductController.addToCart);

//////////////////////////////////////////////////////////////////
router.post("/search", ProductController.searchProducts);

router.get("/count", ProductController.getProductCount);

router.get("/bestSeller", ProductController.getBestSeller);

router.get("/available", ProductController.getAvailableProducts);

router.post("/filter", ProductController.filterByPrice);

module.exports = router;
