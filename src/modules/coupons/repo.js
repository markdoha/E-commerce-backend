// importing coupon model
const coupon = require("./model");


    let create = async (info) => {
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

    let read = async (id = null) => {
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

    let update =  async (id, info) => {
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

   let del = async (id) => {
        try {
            const coupon = await coupon.findByIdAndRemove(id);
            return coupon;
        } catch (error) {
            console.log(error);
            return;
        }
    }

    module.exports = {
        create,
        read,
        update,
        del
    }