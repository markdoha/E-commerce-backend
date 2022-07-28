// importing client model
const client = require("./user.model");

// bycrpt
let bycrpt = require("bcryptjs");

//enviroment variables
let env = require("dotenv").config();

let peaper = process.env.BYCRPT;
let salt = process.env.SALT;

module.exports = class userController {
  //function to get all clients
  async Read(type = "nothing", id = "nothing") {
    try {
      if (id != "nothing" && type == "nothing") {
        let person = await client.findById({ _id: id }).select("-password");
        if (!person) {
          return;
        } else {
          return person;
        }
      } else if (type != "nothing" && id == "nothing") {
        let clients = await client.find({ role: type });
        return clients;
      } else if (type != "nothing" && id != "nothing") {
        let person = await client.findById({ _id: id }).select("-password");
        if (!person) {
          return;
        } else {
          return person;
        }
      } else {
        let clients = await client.find();
        return clients;
      }
    } catch (error) {
      console.log(error);
      return;
    }
  }

  //function to add user
  async create(type, user) {
    try {
      if (type == "admin") {
        const newAdmin = new client(user);
        if (
          !newAdmin.name ||
          !newAdmin.userName ||
          !newAdmin.email ||
          !newAdmin.password
        ) {
          return "data not valid";
        } else {
          newAdmin.password = bycrpt.hashSync(newAdmin.password, peaper, salt);
          newAdmin.role = "admin";
          await newAdmin.save();
          return newAdmin;
        }
      } else if (type == "delivary") {
        const newDelivary = new client(user);
        if (
          !newDelivary.name ||
          !newDelivary.userName ||
          !newDelivary.email ||
          !newDelivary.password
        ) {
          return "data not valid";
        } else {
          newDelivary.password = bycrpt.hashSync(
            newDelivary.password,
            peaper,
            salt
          );
          newDelivary.role = "delivary";
          await newDelivary.save();
          return newDelivary;
        }
      } else if (type == "client") {
        const newClient = new client(user);
        if (
          !newClient.name ||
          !newClient.userName ||
          !newClient.email ||
          !newClient.password
        ) {
          return "data not valid";
        } else {
          newClient.password = bycrpt.hashSync(
            newClient.password,
            peaper,
            salt
          );
          newClient.role = "client";
          await newClient.save();
          return newClient;
        }
      }
    } catch (error) {
      console.log(error);
      return;
    }
  }

  //function to update user
  async update(id, user) {
    try {
      let person = await client.findById({ _id: id });
      if (!person) {
        return;
      } else {
        person.name = user.name;
        person.userName = user.userName;
        person.email = user.email;
        person.password = bycrpt.hashSync(user.password, peaper, salt);
        await person.save();
        return person;
      }
    } catch (error) {
      console.log(error);
      return;
    }
  }

  //function to delete user
  async delete(id) {
    try {
      let person = await client.findById({ _id: id });
      if (!person) {
        return;
      } else {
        await person.remove();
        return person;
      }
    } catch (error) {
      console.log(error);
      return;
    }
  }

  //function to sign in
  async signIn(info) {
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
      console.log(error);
      return;
    }
  }
};
