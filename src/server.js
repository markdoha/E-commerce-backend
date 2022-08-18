const express = require('express');

//importing database connection
const connection = require("./db.connection");

//importing routes
const routes = require("./routes/index.routes");

//app
const app = express();
connection();

app.use(express.json());

app.use("/", routes);


app.listen(3000,console.log("server is running"));