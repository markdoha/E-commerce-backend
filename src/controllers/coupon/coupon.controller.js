const couponController = require("../../modules/coupons/repo");
const Coupon = new couponController();

let addCoupon = async (req, res) => {
    let coupon = await Coupon.create(req.body);
    if (!coupon) res.status(400).json({ message: "coupon not created" });
    else if (coupon == "data not valid")
        res.status(400).json({ message: "data not valid" });
    else {
        res.status(200).json({ message: "coupon created" });
    }
}

let getAllCoupons = async (req, res) => {
    let coupons = await Coupon.read();
    if (!coupons) res.status(400).json({ records: "there is no coupons" });
    else res.status(200).json({ records: coupons });
}

let getCouponById = async (req, res) => {
    let coupon = await Coupon.read(req.params.id);
    if (!coupon) res.status(400).json({ message: "coupon not found" });
    else res.status(200).json({ message: coupon });
}

let updateCoupon = async (req, res) => {
    let coupon = await Coupon.update(req.params.id, req.body);
    if (coupon == "data not valid") res.status(400).json({ message: "data not valid" });
    if (!coupon) res.status(400).json({ message: "coupon not updated" });
    else res.status(200).json({ message: "coupon updated" });
}

let deleteCoupon = async (req, res) => {
    let coupon = await Coupon.delete(req.params.id);
    if (!coupon) res.status(400).json({ records: "error coupon not deleted" });
    else res.status(200).json({ records: "coupon deleted" });
}

module.exports = {
    addCoupon,
    getAllCoupons,
    getCouponById,
    updateCoupon,
    deleteCoupon
}