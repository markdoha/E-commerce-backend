const app = require("express").Router();
const adminController = require("../../controllers/user/admin.controller");

app.get("/client", adminController.printALLClients); //(missing config for the admin)
app.get("/client/:id", adminController.getClientById); //(missing config for the admin)

app.post("/delivary", adminController.addClientDelivary); //(missing config for the admin)
app.get("delivary", adminController.getAllDelivary); //(missing config for the admin)


app.post("/admin", adminController.addAdmin); //(missing config for the admin)
app.get("/admin", adminController.updateAdmin); //(missing config for the admin)
app.get("/admin", adminController.printAdmins); //(missing config for the admin)
app.get("/admin/:id", adminController.getClientById); //(missing config for the admin)

module.exports = app;
