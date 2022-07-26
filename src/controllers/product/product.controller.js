// importing admin repository
const productController = require("../../modules/product/repo");

//admin controller class
const Product = new productController();

let addProduct = async (req, res) => {
  let product = await Product.create(req.body);
  if (!product) res.status(400).json({ message: "product not created" });
  else if (product == "data not valid")
    res.status(400).json({ message: "data not valid" });
  else if (product == "category not found")
    res.status(400).json({ message: "category not found" });
  else {
    res.status(200).json({ message: "product created" });
  }
};

module.exports = {
  addProduct,
};
