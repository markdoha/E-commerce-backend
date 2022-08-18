// importing client model
const client = require("./model");

// bycrpt
let bycrpt = require("bcryptjs");

//enviroment variables
let env = require("dotenv").config();

let peaper = process.env.BYCRPT;
let salt = process.env.SALT;

//function to get user by id
let isExist = async (value) => {
  const user = await client.findOne({ _id: value }).select("-password");
  if (user) {
    return {
      success: true,
      record: user,
      code: 200,
    };
  } else {
    return { success: false, code: 404, error: "User not found" };
  }
};

//function to get all users
let getAll = async (role) => {
  try {
    const users = await client.find({ role: role });
    if (users) {
      return {
        success: true,
        record: users,
        code: 200,
      };
    } else {
      return { success: false, code: 404, error: "no Users in that role" };
    }
  } catch (error) {
    console.log(error);
    return { success: false, code: 500, error: "Server error" };
  }
};

//function to add user
let create = async (type, user) => {
  try {
    if (type == "admin") {
      const newAdmin = new client(user);
      if (
        !newAdmin.name ||
        !newAdmin.userName ||
        !newAdmin.email ||
        !newAdmin.password
      ) {
        return { success: false, code: 400, error: "missing fields" };
      } else {
        newAdmin.password = bycrpt.hashSync(newAdmin.password, peaper, salt);
        newAdmin.role = "admin";
        await newAdmin.save();
        return { success: true, code: 200, record: newAdmin };
      }
    } else if (type == "delivary") {
      const newDelivary = new client(user);
      if (
        !newDelivary.name ||
        !newDelivary.userName ||
        !newDelivary.email ||
        !newDelivary.password
      ) {
        return { success: false, code: 400, error: "missing fields" };
      } else {
        newDelivary.password = bycrpt.hashSync(
          newDelivary.password,
          peaper,
          salt
        );
        newDelivary.role = "delivary";
        await newDelivary.save();
        return { success: true, record: newDelivary, code: 200 };
      }
    } else if (type == "client") {
      const newClient = new client(user);
      if (
        !newClient.name ||
        !newClient.userName ||
        !newClient.email ||
        !newClient.password
      ) {
        return { success: false, code: 400, error: "missing fields" };
      } else {
        newClient.password = bycrpt.hashSync(newClient.password, peaper, salt);
        newClient.role = "client";
        await newClient.save();
        return { success: true, record: newClient, code: 200 };
      }
    }
  } catch (error) {
    console.log(error);
    return;
  }
};

//function to update user
let update = async (id, user) => {
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
};

//function to delete user
let del = async (id) => {
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
};

//function to sign in
let signIn = async (info) => {
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
};

module.exports = {
  create,
  update,
  del,
  signIn,
  isExist,
  getAll,
};
