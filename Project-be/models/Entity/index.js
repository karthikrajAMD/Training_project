const dbConfig = require("../../config/db-config");
const mysql = require("mysql2/promise");
const { Sequelize, DataTypes } = require("sequelize");
const db = {};

mysql
  .createConnection({ user: dbConfig.USER, password: dbConfig.PASSWORD })
  .then((connection) => {
    connection.query(`CREATE DATABASE IF NOT EXISTS ${dbConfig.DATABASE};`);
  });

const sequelize = new Sequelize(
  dbConfig.DATABASE,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.DIALECT,
  }
);
db.sequelize = sequelize;
// db.models = {};
db.users = require("./user")(sequelize, DataTypes);
db.profile = require("./profile")(sequelize, DataTypes);
db.upcomingEvents = require("./upComingEvents")(sequelize, DataTypes);
db.publicHoliday = require("./publicHoliday")(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log("re-sync done");
});

module.exports = db;
