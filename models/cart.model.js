let mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

let cartSchema = mongoose.Schema({
    cartId:{type: mongoose.Types.ObjectId},
    userName: { type: String , require: true},
    items: [{ type: mongoose.Types.ObjectId , ref: "product"}],
    discount: { type: String , require: false},
    copounCode: { type: String , require: false},
    totalPrice: { type: Number , require: true},
})

let cartModel = mongoose.model("cart", cartSchema)

module.exports = cartModel