const app = require("express").Router();

const account = require("./accounts/client.routes");
const product = require("./product/client.product.routes")


app.use("", account);
app.use("", product);

module.exports = app;
