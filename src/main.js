const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, "../.env"),
});
const express = require("express");
const sequelize = require("../config/db.config");
const { Sequelize } = require("sequelize");
require("./models/association")
const cors = require("cors")
const auth = require("./middlewares/auth");
const isAdmin = require("./middlewares/isAdmin");
const routes = require("./routes/root")
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const app = express();
//Configuration middleware for express
app.use(cors())
app.use(express.json())
app.use(cookieParser())

//Define a GET route for the root path "/"
app.get("/", async function (req, res) {
  //Connect to DB
  connectDb();
  // Send response to main screen
  res.send("Hello World!");
  // Create DB
  await sequelize.sync({alter:true})
});

app.listen(process.env.BE_PORT, function () {
  console.log("Example app listening on port 3000!");
});

async function connectDb() {
  try {
    await sequelize.sync({alter:true})
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

routes(app)

//    USE FOR mysql2
// async function connectDb(req, res) {
//   await Sql_con.connect(function (err) {
//     if (err) {
//       console.log("Unable to connect to your database." + err);
//       return err;
//     } else {
//       console.log("Connection has been established successfully.");
//     }
//   });
// }
