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

let getAllProducts = async (req, res) => {
  let products = await Product.read();
  if (!products) res.status(400).json({ records: "there is no products" });
  else res.status(200).json({ records: products });
}

let getProductById = async (req, res) => {
  let product = await Product.read(req.params.id);
  if (!product) res.status(400).json({ message: "product not found" });
  else res.status(200).json({ message: product });
}

let updateProduct = async (req, res) => {
  let product = await Product.update(req.params.id, req.body);
  if (product == "data not valid") res.status(400).json({ records: "data not valid" });
  if (!product) res.status(400).json({ records: "product not updated" });
  else res.status(200).json({ records: "product updated" });
}

let deleteProduct = async (req, res) => {
  let product = await Product.delete(req.params.id);
  if (!product) res.status(400).json({ records: "error product not deleted" });
  else res.status(200).json({ records: "product deleted" });
}

module.exports = {
  addProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
};
