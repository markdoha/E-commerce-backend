const app = require("express").Router();
const clientController = require("../../../controllers/user/user.controller");
const validator = require("../../../helpers/validators");

app.post("/client", validator.accValidator , clientController.addClientUser);
app.put("/client/:id", clientController.updateClient);

app.post("/userSignIn", clientController.userSignIn);

module.exports = app;
