const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./config/db.js");
// const products = require("./data/products.js");
// const categories = require("./data/categories.js");
const productRoutes = require("./routes/productRoutes.js");
const port = process.env.PORT || 5000;

connectDB(); // Connect to MongoDB

const app = express();

// app.use(express.json());
// app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running...");
});

// app.get("/api", (req, res) => {
//   res.send("API is running...");
// });

app.use("/api", productRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
