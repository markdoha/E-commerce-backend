// importing client repository
const userController = require("../../modules/user/repo");

// jwt
const jwt = require("jsonwebtoken");

//function to add User
let addClientUser = async (req, res) => {
  const user = await userController.create("client", req.body);
  if (user != 200) res.status(user.code).json({ record: user });
  else res.status(200).json({ record: user });
};

//signin function
let userSignIn = async (req, res) => {
  let info = req.body;
  const user = await userController.signIn(info);
  if (user.code != 200) res.status(user.code).json({ record: user });
  else {
    let token = jwt.sign({ user: user }, process.env.SECRET);
    res
      .status(200)
      .json({
        record: "welcome" + " " + user.record.role + " " + user.record.name,
        token: token,
      });
  }
};

//function to update user
let updateClient = async (req, res) => {
  let user = await userController.update(req.params.id, req.body);
  if (!user) res.status(400).json({ message: "user not updated" });
  else res.status(200).json({ message: "user updated" });
};

module.exports = {
  addClientUser,
  userSignIn,
  updateClient,
};
