import express from "express";
import dotenv from "dotenv";
dotenv.config();
import products from "./data/products.js";
import categories from "./data/categories.js";
const port = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/product_categories", (req, res) => {
  res.json(categories);
});

app.get("/api/product_categories/:category", (req, res) => {
  const productList = products.filter((p) => {
    console.log(p.category, req.params.category);
    return p.category.toLowerCase() === req.params.category.toLowerCase();
  });
  console.log(productList);
  res.json(productList);
});

app.get("/api/product_categories/:category/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
