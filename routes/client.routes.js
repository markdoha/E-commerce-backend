const app = require("express").Router();
const clientController = require("../controllers/client.controller");


app.get("/allClients", clientController.printALLClients);
app.post("/addUser", clientController.addClientUser);
app.get("/getClientById/:id", clientController.getClientById);
app.post("/userSignIn", clientController.userSignIn);


// app.post("/addDelivary", clientController.addClientDelivary); (missing config for the admin)
// app.post("/addAdmin", clientController.addClientAdmin); (missing config for the admin)

module.exports = app;