const mongoose = require("mongoose");
const validator = require("validator");

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  freshness: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
  },
});

//create model
const Product = new mongoose.model("Product", productSchema);

module.exports = Product;
