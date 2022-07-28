const app = require('express').Router();
const productController = require('../../controllers/product/product.controller');

app.get('/product', productController.getAllProducts);

module.exports = app;