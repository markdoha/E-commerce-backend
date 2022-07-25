// importing client repository
const userController = require("../modules/user/repo");

// jwt
 const jwt = require("jsonwebtoken");
//user controller class
const clientController = new userController();

//function to add User
let addClientUser = async (req, res) => {
  let user = clientController.create("client",req.body);
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
    let user = await clientController.signIn(info);
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
