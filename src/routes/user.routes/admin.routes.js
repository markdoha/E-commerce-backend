const app = require("express").Router();
const adminController = require("../../controllers/admin.controller");

app.get("/allClients", adminController.printALLClients);
app.get("/getClientById/:id", adminController.getClientById);

app.post("/addDelivary", adminController.addClientDelivary); //(missing config for the admin)
app.post("/addAdmin", adminController.addAdmin); //(missing config for the admin)

module.exports = app;
