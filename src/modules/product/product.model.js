let mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

let productSchema = mongoose.Schema({
    productId:{type: mongoose.Types.ObjectId},
    productName: { type: String , require: true},
    productDescription: { type: String , require: true},
    price: { type: Number , require: true},
    discount: { type: String , require: false},
    quantity: { type: Number , require: true},
    category: {
        type: String,
        enum: ["", "clothes", "electronics", "other"],
    }
})

let productModel = mongoose.model("product", productSchema)

module.exports = productModel