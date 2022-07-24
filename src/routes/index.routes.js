const app = require("express").Router();

const adminRoutes = require("./user.routes/admin.routes");
const clientRoutes = require("./user.routes/client.routes");


app.use("api/v1/admin/", adminRoutes)
app.use("api/v1/client/", clientRoutes)


module.exports = app;