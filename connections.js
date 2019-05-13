const mysql = require("mysql");
// require("./config.js")
let pool = mysql.createPool({
  connectionLimit: 10,
  Port: 3306,
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  database: process.env.DB,
});
  
  
  
  


module.exports.pool = pool;


