let mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

let categorySchema = mongoose.Schema({
    categoryId:{type: mongoose.Types.ObjectId},
    categoryName: { type: String , require: true},
    products: [{ type: mongoose.Types.ObjectId , ref: "product"}],
})

let categoryModel = mongoose.model("category", categorySchema)

module.exports = categoryModel