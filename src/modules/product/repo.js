// importing client model
const product = require("./product.model");

// bycrpt
let bycrpt = require("bcryptjs");

//enviroment variables
let env = require("dotenv").config();

let peaper = process.env.BYCRPT;
let salt = process.env.SALT;

module.exports = class productController {
  async create(info) {
    try {
      const newProduct = new product(info);
      if (
        !newProduct.productName ||
        !newProduct.price ||
        !newProduct.quantity ||
        !newProduct.productDescription ||
        !newProduct.category
      ) {
        return "data not valid";
      } else {
        if (
          newProduct.category == "food" ||
          newProduct.category == "clothes" ||
          newProduct.category == "electronics" ||
          newProduct.category == "other"
        ) {
          const product = await newProduct.save();
          return product;
        } else {
          return "category not found";
        }
      }
    } catch (error) {
      console.log(error);
      return;
    }
  }
};
