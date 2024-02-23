const express = require("express");
const router = express.Router();
const asyncHandler = require("../middlewares/asyncHandler");
const Category = require("../models/categoryModel");
const Product = require("../models/productModel");
// const products = require("../data/products.js");
// const categories = require("../data/categories.js");

// router.get("/api", (req, res) => {
//   res.send("API is running...");
// });

router.get(
  "/product_categories",
  asyncHandler(async (req, res) => {
    const categories = await Category.find({});
    console.log(categories);
    res.json(categories);
  })
);

router.get(
  "/products",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

// router.get(
//   "/product_categories/:category",
//   asyncHandler(async (req, res) => {
//     const productList = products.filter((p) => {
//       console.log(p.category, req.params.category);
//       return p.category.toLowerCase() === req.params.category.toLowerCase();
//     });
//     console.log(productList);
//     res.json(productList);
//   })
// );

// product list for specific category
router.get(
  "/product_categories/:category",
  asyncHandler(async (req, res) => {
    const categoryName = req.params.category;
    console.log(categoryName);
    const category = await Category.findOne({ name: categoryName });
    console.log(category);
    const productList = await Product.find({ category: category._id });
    res.json(productList);
    // res.json(category);
  })
);

//product description or details page
// router.get(
//   "/product_categories/:category/:id",
//   asyncHandler(async (req, res) => {
//     const product = products.find((p) => {
//       return p._id === req.params.id && p.category === req.params.category;
//     });
//     res.json(product);
//   })
// );

router.get(
  "/product_categories/:category/:id",
  asyncHandler(async (req, res) => {
    const productID = req.params.id;
    console.log(productID);
    // res.json({ message: "Testing" });
    const product = await Product.findById(productID);
    console.log(product);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  })
);

module.exports = router;
