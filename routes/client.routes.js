const app = require("express").Router();
const clientController = require("../controllers/client.controller");


app.get("/allClients", clientController.printALLClients);
app.post("/addClient", clientController.addClient);

module.exports = app;