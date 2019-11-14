const Sequelize = require("sequelize");

module.exports = new Sequelize("database", "dawid", "password", {
  dialect: "postgres"
});
