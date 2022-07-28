const app = require("express").Router();
const clientController = require("../../controllers//user/user.controller");

app.post("/addUser", clientController.addClientUser);
app.put("/updateUser/:id", clientController.updateClient);

app.post("/userSignIn", clientController.userSignIn);

module.exports = app;
