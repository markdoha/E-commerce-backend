const express = require('express')

//importing database connection
const connection = require("./db.connection")

//importing routes
const clientRoutes = require("./routes/client.routes")
const adminRoutes = require("./routes/admin.routes")

//app
const app = express();
connection();

app.use(express.json());
app.use("/client", clientRoutes);
app.use("/admin", adminRoutes);


app.listen(3000,console.log("server is running"))