// importing client model
const client = require("../model/user.model");

// bycrpt
let bycrpt = require("bcryptjs");
const { Interface } = require("readline");

//enviroment variables
let env = require("dotenv").config();

let peaper = process.env.BYCRPT;
let salt = process.env.SALT;

module.exports = class ClientController {
  //function to add User
  async create(user) {
    try {
      const newUser = new client(user);
      if (
        !newUser.name ||
        !newUser.userName ||
        !newUser.email ||
        !newUser.password
      ) {
        return;
      } else {
        newUser.password = bycrpt.hashSync(newUser.password + peaper, salt);
        await newUser.save();
        return newUser;
      }
    } catch (error) {
      console.log(error);
      res.json({ message: error });
    }
  }

  //signin function
  async SignIn(info) {
    try {
      let user = await client.findOne({ email: info.email });
      if (!user) {
        res.json({ message: "user not found" });
      } else {
        if (bycrpt.compareSync(info.password + peaper, user.password)) {
          return user;
        } else {
          return;
        }
      }
    } catch (error) {
      res.json({ message: error });
    }
  }
};
