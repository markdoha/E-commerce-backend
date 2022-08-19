const app = require("express").Router();

const adminRoutes = require("./admin.routes/admin.index");
const clientRoutes = require("./user.routes/client.index");


// client routes
app.use("/api/v1/", clientRoutes);

// admin routes
app.use("/api/v1/", adminRoutes)


module.exports = app;