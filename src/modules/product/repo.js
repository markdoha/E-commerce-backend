// importing client model
const product = require("./model");

let create = async (info) => {
  try {
    const newProduct = new product(info);
    if (
      !newProduct.productName ||
      !newProduct.price ||
      !newProduct.quantity ||
      !newProduct.productDescription ||
      !newProduct.category
    ) {
      return { success: false, code: 400, error: "data not valid" };
    } else {
      if (
        newProduct.category == "food" ||
        newProduct.category == "clothes" ||
        newProduct.category == "electronics" ||
        newProduct.category == "other"
      ) {
        const product = await newProduct.save();
        return { success: true, record: product, code: 200 };
      } else {
        return { success: false, code: 404, error: "category not found" };
      }
    }
  } catch (error) {
    console.log(error);
    return { success: false, code: 500, error: "server error" };
  }
};

let isExist = async (value) => {
  try {
    const product = await doc.findOne({ _id: value }).select("-password");
    if (product) {
      return {
        success: true,
        record: user,
        code: 200,
      };
    } else {
      return { success: false, code: 404, error: "product not found" };
    }
  } catch (error) {
    console.log(error);
    return { success: false, code: 500, error: "server error" };
  }
};

let getAll = async () => {
  try {
    const products = await product.find();
    if (products) {
      return { success: true, record: products, code: 200 };
    } else {
      return { success: false, code: 404, error: "products not found" };
    }
  } catch (error) {
    console.log(error);
    return { success: false, code: 500, error: "server error" };
  }
};

let update = async (id, info) => {
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
    if (product) {
      return { success: true, record: product, code: 200 };
    } else {
      return { success: false, code: 404, error: "product not found" };
    }
  } catch (error) {
    console.log(error);
    return { success: false, code: 500, error: "server error" };
  }
};

let del = async (id) => {
  try {
    const product = await product.findByIdAndDelete(id);
    if (product) {
      return { success: true, record: "product deleted", code: 200 };
    } else {
      return { success: false, code: 404, error: "product not found" };
    }
  } catch (error) {
    console.log(error);
    return { success: false, code: 500, error: "server error" };
  }
};

module.exports = {
  create,
  isExist,
  getAll,
  update,
  del,
};
