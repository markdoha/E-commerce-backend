// importing client repository
const ClientController = require("../models/user/repo/client");


//user controller class
const clientController = new ClientController();


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
  
};

module.exports = {
  addClientUser,
  userSignIn
};
