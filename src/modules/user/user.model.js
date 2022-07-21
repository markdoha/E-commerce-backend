let mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

let userSchema = mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId },
  name: { type: String, require: true },
  userName: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  role: {
    type: String,
    enum: ["client", "admin", "delivary"],
    default: "client",
  },
  premium: { type: Boolean, default: false },
  creditCards: [
    {
      card: { type: String, require: false },
      expDate: String,
      CCV: Number,
    },
  ],
  wishList: [
    {
      type: mongoose.Types.ObjectId,
      ref: "products",
    },
  ],
});

let userModel = mongoose.model("user", userSchema);

module.exports = userModel;
