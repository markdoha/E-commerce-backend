// importing admin repository
const AdminController = require("../models/user/repo/admin");

//admin controller class
const adminController = new AdminController();

//function to add admin
let addAdmin = async (req, res) => {
  let admin = adminController.create(req.body);
  if (!admin) res.status(400).json({ message: "admin not created" });
  else if (admin == "data not valid")
    res.status(400).json({ message: "data not valid" });
  else res.status(200).json({ message: "admin created" });
};

//function to print all clients
let printALLClients = async (req, res) => {
  let allClients = await adminController.printALLClients();
  if (!allClients) res.status(400).json({ message: "no clients" });
  else res.status(200).json({ message: allClients });
};

//function to get client by id
let getClientById = async (req, res) => {
  let person = await adminController.getClientById(req.params.id);
  if (!person) res.status(400).json({ message: "client not found" });
  else res.status(200).json({ message: person });
};

//function to add delivary
let addClientDelivary = async (req, res) => {
  let delivary = await adminController.addClientDelivary(req.body);
  if (!delivary) res.status(400).json({ message: "delivary not added" });
  else if (delivary == "data not valid")
    res.status(400).json({ message: "data not valid" });
  else res.status(200).json({ message: "delivary added" });
};

module.exports = {
  addAdmin,
  printALLClients,
  getClientById,
  addClientDelivary,
};
