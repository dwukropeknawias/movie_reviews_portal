const Sequelize = require("sequelize");
const sequelize = require("./../database/sequeliseConfig.js");

module.exports = sequelize.define(
  "actor",
  {
    id: {
      type: Sequelize.INTEGER(10),
      primaryKey: true,
      //  allowNull: false,
      autoIncrement: true
    },
    first_name: {
      type: Sequelize.CHAR,
      allowNull: true
    },
    last_name: {
      type: Sequelize.CHAR,
      allowNull: true
    },
    date_of_birth: {
      type: Sequelize.DATE,
      allowNull: true
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: true
    }
  },
  {
    tableName: "actors",
    timestamps: false
  }
);
