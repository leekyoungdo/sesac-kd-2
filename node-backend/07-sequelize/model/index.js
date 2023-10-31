const Sequelize = require("sequelize");
const config = require("../config/config.json")["development"];
// config ={
//     "host": "localhost",
//     "database" :"sesac_test",
//     "username" :"visitor",
//     "password" :"sba123$",
//     "dialect" : "mysql"
// }

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

//sequelize 객체를 만든다.

db.sequelize = sequelize;
db.Sequelize = Sequelize;
// db = {sequelize: sequelize, Sequelize:Sequelize}

// const Visitor = require("./Visitor")
// db.Visitor = Visitor(sequelize, Seiquelize)

db.Visitor = require("./Visitor")(sequelize, Sequelize);

//db.Visiotr 에는 sequelize로 Visitor 테이블을 정의한 객체를 담음

// db.User =  require("./Visitor")(sequelize,Sequelize)

module.exports = db;