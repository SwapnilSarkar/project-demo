// import mongoose from "mongoose";
const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  isService: {
    type: Boolean,
    required: true,
    default: false,
  },
  image: {
    type: String,
    //required: true,
  },
});

const Category = mongoose.model("Category", categorySchema);

// export default Category;
module.exports = Category;
