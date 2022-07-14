let mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

let orderSchema = mongoose.Schema({
    cartId:{type: mongoose.Types.ObjectId, ref: "cart"},
    userId: { type: mongoose.Types.ObjectId , ref: "client"},
    items: [{ type: mongoose.Types.ObjectId , ref: "product"}],
    delivaryId: { type: mongoose.Types.ObjectId , ref: "delivary"},
    paymentType: { type: String , require: true},
    address: { type: String , require: true},
    totalPrice: { type: Number , require: true},
})

let orderModel = mongoose.model("order", orderSchema)

module.exports = orderModel;