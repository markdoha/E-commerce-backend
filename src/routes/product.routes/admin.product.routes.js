const app = require('express').Router();
const productController = require('../../controllers/product/product.controller');

app.post('/addProduct', productController.addProduct);

module.exports = app;