const app = require("express").Router();
const couponController = require("../../controllers/coupon/coupon.controller");

app.post("/coupon", couponController.addCoupon);
app.get("/coupon", couponController.getAllCoupons);
app.get("/coupon/:id", couponController.getCouponById);
app.put("/coupon/:id", couponController.updateCoupon);
app.delete("/coupon/:id", couponController.deleteCoupon);

module.exports = app;
