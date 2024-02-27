const express = require("express");
const router = express.Router();

const {
  getProductCategories,
  getProducts,
  getProductsByCategory,
  getProductById,
} = require("../controllers/productController");

router.get("/product_categories", getProductCategories);
router.get("/products", getProducts);
router.get("/product_categories/:category", getProductsByCategory);
router.get("/product_categories/:category/:id", getProductById);

module.exports = router;
