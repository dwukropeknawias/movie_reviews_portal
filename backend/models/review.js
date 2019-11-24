const Sequelize = require("sequelize");
const sequelize = require("./../database/sequeliseConfig.js");

module.exports = sequelize.define(
  "review",
  {
    id: {
      type: Sequelize.INTEGER(10),
      primaryKey: true,
      //allowNull: false,
      autoIncrement: true
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
      type: Sequelize.TEXT,
      allowNull: true
    },
    rating: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    date_of_add: {
      type: Sequelize.DATE,
      allowNull: true,
      defaultValue: Sequelize.NOW
    }
  },
  {
    tableName: "reviews",
    timestamps: false
  }
);
