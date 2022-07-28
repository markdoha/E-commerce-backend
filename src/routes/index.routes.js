const app = require("express").Router();

const adminRoutes = require("./user.routes/admin.routes");
const clientRoutes = require("./user.routes/client.routes");
const adminProducts = require("./product.routes/admin.product.routes");
const clientProducts = require("./product.routes/client.product.routes");


app.use("/api/v1/admin", adminRoutes)
app.use("/api/v1/client", clientRoutes)
app.use("/api/v1/client", clientProducts)
app.use("/api/v1/admin", adminProducts) 


module.exports = app;