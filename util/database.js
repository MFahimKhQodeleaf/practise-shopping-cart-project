const Sequelize = require("sequelize") ;

const sequelize = new Sequelize("postgres://qodeleaf:qod@123@localhost:5432/myform");


 sequelize.authenticate();
  console.log("Connection has been established successfully.");


module.exports = sequelize;