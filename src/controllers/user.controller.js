// importing client repository
const ClientController = require("../models/user/repo/client");

//user controller class
const clientController = new ClientController();

//function to add User
let addClientUser = async (req, res) => {
  let user = clientController.create(req.body);
  if (!user) res.status(400).json({ message: "user not created" });
  else res.status(200).json({ message: "user created" });
};

//signin function
let userSignIn = async (req, res) => {
  let info = req.body;
  let user = await clientController.SignIn(info);
  if (!user) res.status(400).json({ message: "user not found" });
  else
    res
      .status(200)
      .json({ message: "welcome" + " " + user.role + " " + user.name });
};

module.exports = {
  addClientUser,
  userSignIn,
};
