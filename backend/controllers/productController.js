const asyncHandler = require("../middlewares/asyncHandler");
const Category = require("../models/categoryModel");
const Product = require("../models/productModel");

const getProductCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find({});
  console.log(categories);
  res.json(categories);
});
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

const getProductsByCategory = asyncHandler(async (req, res) => {
  const categoryName = req.params.category;
  console.log(categoryName);
  const category = await Category.findOne({ name: categoryName });
  console.log(category);
  if (category === null) {
    res.status(404);
    throw new Error("Category not found");
  }
  const productList = await Product.find({ category: category._id });
  if (productList) {
    res.json(productList);
  } else {
    res.status(404);
    throw new Error("Resources not found");
  }
});

const getProductById = asyncHandler(async (req, res) => {
  const productID = req.params.id;
  const category = req.params.category;
  console.log(productID);
  // res.json({ message: "Testing" });
  const product = await Product.findById(productID);
  console.log(product.category);
  if (product && category === product.category) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Resource not found");
  }
});

module.exports = {
  getProductCategories: getProductCategories,
  getProducts: getProducts,
  getProductsByCategory: getProductsByCategory,
  getProductById: getProductById,
};
