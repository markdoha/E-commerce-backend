const app = require("express").Router();
const adminController = require("../../controllers/admin.controller");

app.get("/allClients", adminController.printALLClients); //(missing config for the admin)
app.get("/client/:id", adminController.getClientById); //(missing config for the admin)

app.post("/addDelivary", adminController.addClientDelivary); //(missing config for the admin)


app.post("/addAdmin", adminController.addAdmin); //(missing config for the admin)
app.get("/allAdmin", adminController.printAdmins); //(missing config for the admin)

module.exports = app;
