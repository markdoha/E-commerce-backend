const app = require("express").Router();
const clientController = require("../../controllers//user/user.controller");

app.post("/client", clientController.addClientUser);
app.put("/client/:id", clientController.updateClient);

app.post("/userSignIn", clientController.userSignIn);

module.exports = app;
