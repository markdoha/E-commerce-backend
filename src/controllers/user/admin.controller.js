// importing admin repository
const userController = require("../../modules/user/repo");

//admin controller class
const User = new userController();

//jwt
const jwt = require("jsonwebtoken");

//function to add admin
let addAdmin = async (req, res) => {
  let admin = User.create("admin", req.body);
  if (!admin) res.status(400).json({ message: "admin not created" });
  else if (admin == "data not valid")
    res.status(400).json({ message: "data not valid" });
  else {
    let token = jwt.sign({ user: admin }, process.env.SECRET);
    res.status(200).json({ message: "admin created", token: token });
  }
};

//function to print all admins
let printAdmins = async (req, res) => {
  let admins = await User.Read("admin");
  if (!admins) res.status(400).json({ message: "no admins" });
  else res.status(200).json({ message: "all admins", admins: admins });
};

//function to print all clients
let printALLClients = async (req, res) => {
  let allClients = await User.Read("client");
  if (!allClients) res.status(400).json({ message: "no clients" });
  else res.status(200).json({ message: allClients });
};

//function to get client by id
let getClientById = async (req, res) => {
  let person = await User.Read("client", req.params.id);
  if (!person) res.status(400).json({ message: "client not found" });
  else res.status(200).json({ records: person });
};

//function to get client by id
let getadminById = async (req, res) => {
  let person = await User.Read("admin", req.params.id);
  if (!person) res.status(400).json({ message: "admin not found" });
  else res.status(200).json({ records: person });
};

//function to add delivary
let addClientDelivary = async (req, res) => {
  let delivary = await User.create("delivary", req.body);
  if (!delivary) res.status(400).json({ message: "delivary not added" });
  else if (delivary == "data not valid")
    res.status(400).json({ message: "data not valid" });
  else res.status(200).json({ message: "delivary added" });
};

// get all delivary
let getAllDelivary = async (req, res) => {
  let delivary = await User.Read("delivary");
  if (!delivary) res.status(400).json({ message: "no delivaries" });
  else res.status(200).json({ message: delivary });
};

let updateAdmin = async (req, res) => {
  let admin = await User.update(req.params.id, req.body);
  if (!admin) res.status(400).json({ message: "admin not updated" });
  else res.status(200).json({ message: "admin updated" });
}

module.exports = {
  addAdmin,
  printALLClients,
  getClientById,
  addClientDelivary,
  printAdmins,
  getadminById,
  getAllDelivary,
  updateAdmin
};
