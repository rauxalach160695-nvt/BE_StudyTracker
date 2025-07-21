const mysql = require("mysql2");
const { Sequelize } = require("sequelize");

async function initializeDatabase() {
  var db_con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
  });
  console.log(process.env.DB_NAME);
  db_con.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\`;`);
  db_con.end();
}

initializeDatabase();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  { host: process.env.DB_HOST, dialect: "mysql" }
);

module.exports = sequelize;
