const Sequelize = require("sequelize");
const sequelize = require("./../database/sequeliseConfig.js");

module.exports = sequelize.define(
  "actor",
  {
    id: {
      type: Sequelize.INTEGER(10),
      primaryKey: true,
      allowNull: false
    },
    first_name: {
      type: Sequelize.STRING,
      allowNull: true
    },
    last_name: {
      type: Sequelize.STRING,
      allowNull: true
    },
    date_of_birth: {
      type: Sequelize.DATEONLY,
      allowNull: true
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true
    }
  },
  {
    tableName: "actor",
    timestamps: false
  }
);
