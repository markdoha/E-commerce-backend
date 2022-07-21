// importing client repository
const ClientController = require("../modules/user/client");

// jwt
 const jwt = require("jsonwebtoken");
//user controller class
const clientController = new ClientController();

//function to add User
let addClientUser = async (req, res) => {
  let user = clientController.create(req.body);
  if (!user) res.status(400).json({ message: "user not created" });
  else if (user == "data not valid")
    res.status(400).json({ message: "data not valid" });
    else  {
      res.status(200).json({ message: "user created   " });
    }
  };

  //signin function
  let userSignIn = async (req, res) => {
    let info = req.body;
    let user = await clientController.SignIn(info);
    if (!user) res.status(400).json({ message: "user not found" });
    else{
    let token = jwt.sign({ user: user }, process.env.SECRET);
    res
      .status(200)
      .json({ message: "welcome" + " " + user.role + " " + user.name, token: token});
    }
};

module.exports = {
  addClientUser,
  userSignIn,
};
