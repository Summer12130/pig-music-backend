const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  APP_PORT,
  MYSQL_HOST,
  MYSQL_DATABASE,
  MYSQL_PORT,
  MYSQL_USER,
  MYSQL_PASSWORD,
} = process.env;
