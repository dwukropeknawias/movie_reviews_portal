const Sequelize = require("sequelize");
const sequelize = require("./../database/sequeliseConfig.js");

module.exports = sequelize.define(
  "role",
  {
    id: {
      type: Sequelize.INTEGER(10),
      primaryKey: true,
      //allowNull: false,
      autoIncrement: true
    },
    actor_id: {
      type: Sequelize.INTEGER(10),
      allowNull: true
    },
    movie_id: {
      type: Sequelize.INTEGER(10),
      allowNull: true
    },
    name: {
      type: Sequelize.TEXT,
      allowNull: true
    }
  },
  {
    tableName: "roles",
    timestamps: false
  }
);
