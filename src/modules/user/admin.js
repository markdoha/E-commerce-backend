// importing client model
const client = require("./user.model");

// bycrpt
let bycrpt = require("bcryptjs");

//enviroment variables
let env = require("dotenv").config();

let peaper = process.env.BYCRPT;
let salt = process.env.SALT;

module.exports = class adminController {
  //function to get all clients
  async Read(type, id="nothing") {
    try {
      if(id!="nothing"){
        let person = await client.findById({ _id: id }).select("-password");
        if (!person) {
          return;
        } else {
          return person;
        }
      }
      let clients = await client.find({role: type});
      return clients;
    } catch (error) {
      console.log(error);
      return;
    }
  }

  //function to get client by id
  async getClientById(id) {
    try {
      let person = await client.findById({ _id: id }).select("-password");
      if (!person) {
        return;
      } else {
        return person;
      }
    } catch (error) {
      console.log(error);
      return;
    }
  }

  //function to add Delivary
  async addClientDelivary(delivary) {
    try {
      const newDelivary = new client(delivary);
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
    } catch (error) {
      console.log(error);
      return;
    }
  }

  //function to add Admin
  async addClientAdmin(admin) {
    try {
      const newAdmin = new client(admin);
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
    } catch (error) {
      console.log(error);
      return;
    }
  }
};
