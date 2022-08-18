const app = require('express').Router();
const productController = require('../../../controllers/product/product.controller');

app.post('/product', productController.addProduct);
app.get('/product', productController.getAllProducts);
app.get('/product/:id', productController.getProductById);
app.put('/product/:id', productController.updateProduct);
app.delete('/product/:id', productController.deleteProduct);

module.exports = app;