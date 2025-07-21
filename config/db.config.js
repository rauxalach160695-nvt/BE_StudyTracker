const SQL = require("mysql2")

const Sql_con = SQL.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
})

module.exports = Sql_con