let mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

let productSchema = mongoose.Schema({
    productId:{type: mongoose.Types.ObjectId},
    productName: { type: String , require: true},
    price: { type: Number , require: true},
    quantity: { type: Number , require: true},
    productDescription: { type: String , require: true},
    discount: { type: String , require: false},
    category: {
        type: String,
        enum: ["food", "clothes", "electronics", "other"],
    }
})

let productModel = mongoose.model("product", productSchema)

module.exports = productModel