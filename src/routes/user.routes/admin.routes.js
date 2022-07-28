const app = require("express").Router();
const adminController = require("../../controllers/user/admin.controller");

app.get("/Clients", adminController.printALLClients); //(missing config for the admin)
app.get("/clients/:id", adminController.getClientById); //(missing config for the admin)

app.post("/delivary", adminController.addClientDelivary); //(missing config for the admin)
app.get("delivary", adminController.getAllDelivary); //(missing config for the admin)


app.post("/admin", adminController.addAdmin); //(missing config for the admin)
app.get("/admin", adminController.updateAdmin); //(missing config for the admin)
app.get("/admin", adminController.printAdmins); //(missing config for the admin)
app.get("/admin/:id", adminController.getadminById); //(missing config for the admin)

module.exports = app;
