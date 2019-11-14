const Sequelize = require("sequelize");
const sequelize = require("./../database/sequeliseConfig.js");

module.exports = sequelize.define(
  "movie",
  {
    id: {
      type: Sequelize.INTEGER(10),
      primaryKey: true,
      allowNull: false
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    year: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    runtime: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    genre: {
      type: Sequelize.STRING,
      allowNull: true
    },
    plot: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    awards: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    box_office: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    production: {
      type: Sequelize.STRING,
      allowNull: true
    },
    poster: {
      type: Sequelize.CHAR,
      allowNull: true
    }
  },
  {
    tableName: "movie",
    timestamps: false
  }
);
