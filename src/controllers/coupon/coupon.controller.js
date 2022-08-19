const couponController = require("../../modules/coupons/repo");

let addCoupon = async (req, res) => {
    let coupon = await couponController.create(req.body);
    res.status(coupon.code).json({ records: coupon });
}

let getAllCoupons = async (req, res) => {
    let coupons = await couponController.getAll();
    res.status(coupons.code).json({ records: coupons });
}

let getCouponById = async (req, res) => {
    let coupon = await couponController.isExist(req.params.id);
    res.status(coupon.code).json({ records: coupon });
}

let updateCoupon = async (req, res) => {
    let coupon = await couponController.update(req.params.id, req.body);
    res.status(coupon.code).json({ records: coupon });
}

let deleteCoupon = async (req, res) => {
    let coupon = await couponController.delete(req.params.id);
    res.status(coupon.code).json({ records: coupon });
}

module.exports = {
    addCoupon,
    getAllCoupons,
    getCouponById,
    updateCoupon,
    deleteCoupon
}