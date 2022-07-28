// importing client model
const product = require("./product.model");

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

  async read(id = null) {
    try {
      if (id) {
        const product = await product.findById(id);
        return product;
      } else {
        const product = await product.find();
        return product;
      }
    } catch (error) {
      console.log(error);
      return;
    }
  }

  async update(id, info) {
    try {
      if (
        !info.productName ||
        !info.price ||
        !info.quantity ||
        !info.productDescription ||
        !info.category
      )
        return "data not valid";

      const product = await product.findByIdAndUpdate(id, info);
      return product;
    } catch (error) {
      console.log(error);
      return;
    }
  }

  async delete(id) {
    try {
      const product = await product.findByIdAndDelete(id);
      return product;
    } catch (error) {
      console.log(error);
      return;
    }
  }
};
