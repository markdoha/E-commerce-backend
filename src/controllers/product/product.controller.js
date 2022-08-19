// importing admin repository
const productController = require("../../modules/product/repo");

let addProduct = async (req, res) => {
  let product = await productController.create(req.body);
  if (product.code != 200) res.status(product.code).json({ records: product });
  else res.status(200).json({ records: product });
};

let getAllProducts = async (req, res) => {
  let products = await productController.getAll();
  res.status(products.code).json({ records: products });
}

let getProductById = async (req, res) => {
  let product = await productController.isExist(req.params.id);
  res.status(product.code).json({ records: product });
}

let updateProduct = async (req, res) => {
  let product = await productController.update(req.params.id, req.body);
  res.status(product.code).json({ records: product });
}

let deleteProduct = async (req, res) => {
  let product = await productController.del(req.params.id);
  res.status(product.code).json({ records: product });
}

module.exports = {
  addProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
};
