const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, "../.env"),
});
require("dotenv").config;
const express = require("express");
const Sql_con = require("../config/db.config");

var app = express();

//Define a GET route for the root path "/"
app.get("/", async function (req, res) {
    //Connect to DB
  connectDb();
  // Send response to main screen
  res.send("Hello World!");
});

app.listen(process.env.BE_PORT, function () {
  console.log("Example app listening on port 3000!");
});

async function connectDb(req, res) {
  await Sql_con.connect(function (err) {
    if (err) {
      console.log("Unable to connect to your database." + err);
      return err;
    } else {
      console.log("Connection has been established successfully.");
    }
  });
}
