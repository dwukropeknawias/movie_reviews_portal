const Sequelize = require("sequelize");
const sequelize = require("./../database/sequeliseConfig.js");

module.exports = sequelize.define(
  "review",
  {
    id: {
      type: Sequelize.INTEGER(10),
      primaryKey: true,
      allowNull: false
    },
    user_id: {
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
    },
    rating: {
      type: Sequelise.INTEGER,
      allowNull: true
    }
  },
  {
    tableName: "review",
    timestamps: false
  }
);
