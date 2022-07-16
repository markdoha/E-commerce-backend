// importing client model
const client = require("../models/client.model");

// bycrpt
let bycrpt = require("bcryptjs");

//enviroment variables
let env = require("dotenv").config();

let peaper = process.env.BYCRPT;
let salt = process.env.SALT;

//function to get all clients
let printALLClients = async (req, res) => {
  try {
    let clients = await client.find({});
    res.json(clients);
  } catch (error) {
    res.json({ message: error });
  }
};

//function to get client by id
let getClientById = async (req, res) => {
  try {
    let person = await client
      .findById({ _id: req.params.id })
      .select("-password");
    if (!person) {
      res.json({ message: "client not found" });
    } else {
      res.json(person);
    }
  } catch (error) {
    res.json({ message: error });
  }
};

//function to add Delivary
let addClientDelivary = async (req, res) => {
  try {
    const newDelivary = new client(req.body);
    if (
      !newDelivary.name ||
      !newDelivary.userName ||
      !newDelivary.email ||
      !newDelivary.password
    ) {
      res.json({ success: "False // ENTER VALID DATA PLZZZZZZZ" });
    } else {
      newDelivary.password = bycrpt.hashSync(
        newDelivary.password,
        peaper,
        sault
      );
      newDelivary.role = "delivary";
      await newDelivary.save();
      res.status(201).json({ success: "true" });
    }
  } catch (error) {
    res.json({ message: error });
  }
};

//function to add Admin
let addClientAdmin = async (req, res) => {
  try {
    const newAdmin = new client(req.body);
    if (
      !newAdmin.name ||
      !newAdmin.userName ||
      !newAdmin.email ||
      !newAdmin.password
    ) {
      res.json({ success: "False // ENTER VALID DATA PLZZZZZZZ" });
    } else {
      newAdmin.password = bycrpt.hashSync(newAdmin.password, peaper, sault);
      newAdmin.role = "admin";
      await newAdmin.save();
      res.status(201).json({ success: "true" });
    }
  } catch (error) {
    res.json({ message: error });
  }
};
