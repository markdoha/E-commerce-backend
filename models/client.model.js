let mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

let clientSchema = mongoose.Schema({
    clientId:{type: mongoose.Types.ObjectId},
    name: { type: String , require: true},
    userName: { type: String , require: true},
    email: { type: String , require: true},
    password: { type: String , require: true},
    role: {
        type: String,
        enum: ['user', 'admin', 'delivary'],
        default: 'user'
    },
    premium: { type: Boolean , default: false},
    creditCard: { type: String , require: true},
    creditCardExp: {type: String, require: true},
    creditCardCcv:{type: Number, require: true},
    wishList: [{
        type: mongoose.Types.ObjectId,
        ref: "products"
    }],
    
})

let clientModel = mongoose.model("client", clientSchema)

module.exports = clientModel;