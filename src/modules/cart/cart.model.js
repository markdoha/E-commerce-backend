let mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

let cartSchema = mongoose.Schema({
  cartId: { type: mongoose.Types.ObjectId },
  userId: { type: String, ref: "user", require: true },
  items: [
    {
      product: { type: mongoose.Types.ObjectId, ref: "product" },
      quantity: Number,
      total: Number,
    },
  ],
  discount: { type: String, require: false },
  copounCode: { type: String,  ref: "copoun", require: false },
  totalPrice: { type: Number, require: true },
});

let cartModel = mongoose.model("cart", cartSchema);

module.exports = cartModel;
