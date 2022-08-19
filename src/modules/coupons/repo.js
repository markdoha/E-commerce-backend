// importing coupon model
const coupon = require("./model");

let create = async (info) => {
  try {
    const newCoupon = new coupon(info);
    if (!newCoupon.value || !newCoupon.code || !newCoupon.quantity) {
      return { success: false, code: 400, error: "data not valid" };
    } else {
      const coupon = await newCoupon.save();
      return { success: true, record: coupon, code: 200 };
    }
  } catch (error) {
    console.log(error);
    return { success: false, code: 500, error: "server error" };
  }
};

let isExist = async (value) => {  
  try {
    const fcoupon = await coupon.findOne({ _id: value }).select("-password");
    if (fcoupon) {
      return {
        success: true,
        record: fcoupon,
        code: 200,
      };
    } else {
      return { success: false, code: 404, error: "coupon not found" };
    }
  } catch (error) {
    console.log(error);
    return { success: false, code: 500, error: "server error" };
  }
}

let getAll = async () => {
  try {
    const coupons = await coupon.find();
    if (coupons) {
      return { success: true, record: coupons, code: 200 };
    } else {
      return { success: false, code: 404, error: " no coupons found" };
    }
  } catch (error) {
    console.log(error);
    return { success: false, code: 500, error: "server error" };
  }
}

let update = async (id, info) => {
  try {
    if (!info.value || !info.code || !info.quantity) {
      return "data not valid";
    } else {
      const coupon = await coupon.findByIdAndUpdate(id, info);
      return coupon;
    }
  } catch (error) {
    console.log(error);
    return;
  }
};

let del = async (id) => {
  try {
    const coupon = await coupon.findByIdAndRemove(id);
    return coupon;
  } catch (error) {
    console.log(error);
    return;
  }
};

module.exports = {
  create,
  isExist,
  getAll,
  update,
  del,
};
