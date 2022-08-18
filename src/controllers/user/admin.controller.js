// importing admin repository
const userController = require("../../modules/user/repo");

//jwt
const jwt = require("jsonwebtoken");

//function to add admin
let addAdmin = async (req, res) => {
  const admin = await userController.create("admin", req.body);
  if (admin.code != 200) res.status(admin.code).json({records: admin});
  else {
    let token = jwt.sign({ user: admin.record }, process.env.SECRET);
    res.status(admin.code).json({ records: admin , token: token });
  }
};

//function to print all admins
let printAdmins = async (req, res) => {
  const admins = await userController.getAll("admin");
  if (admins.code != 200) res.status(admins.code).json({records: admins});
  else res.status(admins.code).json({ records: admins });
};

//function to print all clients
let printALLClients = async (req, res) => {
  const allClients = await userController.Read("client");
  if (allClients.code != 200) res.status(allClients.code).json({ record: allClients });
  else res.status(200).json({ records: allClients });
};

//function to get client by id
let getClientById = async (req, res) => {
  const person = await userController.isExist(req.params.id);
  if (person != 200) res.status(person.code).json({ records: person });
  else res.status(200).json({ records: person });
};

//function to add delivary
let addClientDelivary = async (req, res) => {
  const delivary = await userController.create("delivary", req.body);
  if (delivary != delivary.code) res.status(delivary.code).json({ record: delivary });
  else res.status(200).json({ record: delivary });
};

// get all delivary
let getAllDelivary = async (req, res) => {
  let delivary = await userController.Read("delivary");
  if (!delivary) res.status(400).json({ message: "no delivaries" });
  else res.status(200).json({ message: delivary });
};

// update admin
let updateAdmin = async (req, res) => {
  const admin = await userController.update(req.params.id, req.body);
  if (admin != 200) res.status(admin.code).json({ record: admin });
  else res.status(200).json({ record: admin });
}

module.exports = {
  addAdmin,
  printALLClients,
  getClientById,
  addClientDelivary,
  printAdmins,
  getAllDelivary,
  updateAdmin
};
