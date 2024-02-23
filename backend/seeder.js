const mongoose = require("mongoose");
const dotenv = require("dotenv");
const colors = require("colors");
const users = require("./data/users.js");
// const user = require("./data/user.js");
const categories = require("./data/categories.js");
const products = require("./data/products.js");
const { User } = require("./models/userModel.js");
const Product = require("./models/productModel.js");
const Category = require("./models/categoryModel.js");
const Order = require("./models/orderModel.js");
const connectDB = require("./config/db.js");
const bcrypt = require("bcryptjs");

dotenv.config();

connectDB();

const importData = async function () {
  await User.deleteMany();
  await Order.deleteMany();
  await Category.deleteMany();
  await Product.deleteMany();

  const user1 = new User({
    name: "Admin user",
    email: "admin@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  });
  console.log(user1);
  const createdUsers = await User.insertMany(user1);
  const adminUser = createdUsers[0]._id;

  //await Category.insertMany(categories);

  const sampleProducts = [];

  for (var product of products) {
    for (var prop in product) {
      if (typeof product[prop] == "string") {
        product[prop] = product[prop].trim();
      }
    }

    try {
      const categoryExits = await Category.findOne({
        name: product.category,
      });
      if (categoryExits) {
        product.category = categoryExits._id;
      } else {
        const newCategory = Category({
          name: product.category,
          image: product.categoryImage,
          isService: false,
        });
        const savedCat = await newCategory.save();
        product.category = savedCat._id;
      }
    } catch (error) {
      console.log(error);
      return;
    }
    product.user = adminUser;
    sampleProducts.push(product);
  }
  await Product.insertMany(sampleProducts);

  // await Category.deleteMany();
  // await Category.insertMany(categories);

  console.log(`Data Successfully Imported!`.green.inverse);
  process.exit();
};

// const destroyData = async () => {
//   try {
//     await User.deleteMany();
//     await Order.deleteMany();
//     await Category.deleteMany();
//     await Product.deleteMany();

//     console.log('Data Destroyed!'.red.inverse);
//     process.exit();
//   } catch (error) {
//     console.log(`${error}`.red.inverse);
//     process.exit(1);
//   }
// };
importData();
