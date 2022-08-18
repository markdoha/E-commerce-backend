const app = require("express").Router();
const accounts = require("./accounts/admin.routes");
const products = require("./products/admin.product.routes");
const coupons = require("./coupons/coupon.routes");

app.use("", accounts);
app.use("", products);
app.use("", coupons);

module.exports = app;