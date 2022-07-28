// importing coupon model
const coupon = require("./copouns.model");

module.exports = class couponController {
    async create(info) {
        try {
            const newCoupon = new coupon(info);
            if(!newCoupon.value || !newCoupon.code || !newCoupon.quantity){
                return "data not valid";
            }
            else{
                const coupon = await newCoupon.save();
                return coupon;
            }
        } catch (error) {
            console.log(error);
            return;
        }
    }

    async read(id = null) {
        try {
            if (id) {
                const coupon = await coupon.findById(id);
                return coupon;
            } else {
                const coupon = await coupon.find();
                return coupon;
            }
        } catch (error) {
            console.log(error);
            return;
        }
    }

    async update(id, info) {
        try {
            if(!info.value || !info.code || !info.quantity){
                return "data not valid";
            }
            else{
                const coupon = await coupon.findByIdAndUpdate(id, info);
                return coupon;
            }
        } catch (error) {
            console.log(error);
            return;
        }
    }

    async delete(id) {
        try {
            const coupon = await coupon.findByIdAndRemove(id);
            return coupon;
        } catch (error) {
            console.log(error);
            return;
        }
    }
};