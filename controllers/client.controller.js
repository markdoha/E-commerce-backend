// importing client model
const client = require("../models/client.model")

// bycrpt 
let bycrpt = require("bcryptjs");

//enviroment variables
let env = require("dotenv").config()

let peaper = process.env.BYCRPT
let sault = process.env.SAULT

let printALLClients = async (req, res) => {
    try {
        let clients = await client.find({})
        res.json(clients)
    } catch (error) {
        res.json({ message: error })
    }
}


let addClient = async (req, res) => {
    try {
            const newUser = new client(req.body)
            if(!newUser.name || !newUser.userName || !newUser.email || !newUser.password || !newUser.creditCard || !newUser.creditCardExp || !newUser.creditCardCcv){
                res.json( { success: "False // ENTER VALID DATA PLZZZZZZZ" } );
            }
            else{
            newUser.password = bycrpt.hashSync(newUser.password, peaper, sault);
            await newUser.save();
                res.status(201).json({success: "true"})
            }
        }catch (error) {
                res.json({ message: error })
        }
}

module.exports = {
    printALLClients,
    addClient
}