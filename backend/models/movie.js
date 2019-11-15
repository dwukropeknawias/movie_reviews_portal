const Sequelize = require("sequelize");
const sequelize = require("./../database/sequeliseConfig.js");

module.exports = sequelize.define(
  "movie",
  {
    id: {
      type: Sequelize.INTEGER(10),
      primaryKey: true,
      //  allowNull: false,
      autoIncrement: true
    },
    title: {
      type: Sequelize.CHAR,
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
      type: Sequelize.CHAR,
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
      type: Sequelize.CHAR,
      allowNull: true
    },
    poster: {
      type: Sequelize.TEXT,
      allowNull: true
    }
  },
  {
    tableName: "movies",
    timestamps: false
  }
);
