const app = require("express").Router();
const clientController = require("../../controllers/user.controller");

app.post("/addUser", clientController.addClientUser);

app.post("/userSignIn", clientController.userSignIn);

module.exports = app;
