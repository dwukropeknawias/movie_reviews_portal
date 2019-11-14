const Sequelize = require("sequelize");
const sequelize = require("./../database/sequeliseConfig.js");

module.exports = sequelize.define(
  "role",
  {
    id: {
      type: Sequelize.INTEGER(10),
      primaryKey: true,
      allowNull: false
    },
    actor_id: {
      type: Sequelize.INTEGER(10),
      allowNull: true
    },
    movie_id: {
      type: Sequelize.INTEGER(10),
      allowNull: true
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true
    }
  },
  {
    tableName: "role",
    timestamps: false
  }
);
