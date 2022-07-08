const express = require('express')

//importing database connection
const connection = require("./db.connection")

//importing routes
const clientRoutes = require("./routes/client.routes")

//app
const app = express();
connection();

app.use(express.json());
app.use(clientRoutes);

app.listen(3000,console.log("server is running"))