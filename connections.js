const mysql = require("mysql");
// require("./config.js")
let pool = mysql.createPool({
  connectionLimit: 10,
  Port: 3306,
  host: process.env.DBhost,
  user: process.env.DBuser,
  password: process.env.DBpassword,
  database: process.env.DB,
});
  
  
  
  


module.exports.pool = pool;


