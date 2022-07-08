let mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

let copounSchema = mongoose.Schema({
    copounId:{type: mongoose.Types.ObjectId},
    value: { type: Number , require: true},
    code: { type: String , require: true},
    quantity: { type: Number , require: true},
})

let copounModel = mongoose.model("copoun", copounSchema)

module.exports = copounModel