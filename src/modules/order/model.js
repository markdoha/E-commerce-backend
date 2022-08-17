let mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

let orderSchema = mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId, ref: "user" },
  items: [
    {
      product: { type: mongoose.Types.ObjectId, ref: "product" },
      quantity: Number,
      total: Number,
    },
  ],
  delivaryId: { type: mongoose.Types.ObjectId, ref: "user" },
  paymentType: {
    type: String,
    require: true,
    enum: ["cash", "credit", "debit"],
  },
  status: {
    type: String,
    enum: ["pending", "delivary", "completed", "cancelled"],
    default: "pending",
  },
  address: { type: String, require: true },
  totalPrice: { type: Number, require: true },
});

let orderModel = mongoose.model("order", orderSchema);

module.exports = orderModel;
