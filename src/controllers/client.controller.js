// importing client model
const client = require("../models/user/model/user.model");
const ClientController = require("../models/user/repo/client");

const clientController = new ClientController();
// bycrpt
let bycrpt = require("bcryptjs");


//enviroment variables
let env = require("dotenv").config();

let peaper = process.env.BYCRPT;
let salt = process.env.SALT;

//function to add User
let addClientUser = async (req, res) => {
  let user = clientController.create(req.body);
  if(!user)
    res.status(400).json({ message: "user not created" });
    else
    res.status(200).json({ message: "user created" });
};

//signin function
let userSignIn = async (req, res) => {
  try {
    let user = await client.findOne({ email: req.body.email });
    if (!user) {
      res.json({ message: "user not found" });
    } else {
      if (bycrpt.compareSync(req.body.password + peaper, user.password)) {
        res.json({ message: "welcome" + " " + user.role + " " + user.name });
      } else {
        res.json({ message: "password is incorrect" });
      }
    }
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = {
  addClientUser,
  userSignIn
};
