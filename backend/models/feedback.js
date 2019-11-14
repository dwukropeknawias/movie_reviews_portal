const Sequelize = require("sequelize");
const sequelize = require("./../database/sequeliseConfig.js");

module.exports = sequelize.define(
  "feedback",
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
    review_id: {
      type: Sequelize.INTEGER(10),
      allowNull: true
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true
    }
  },
  {
    tableName: "feedback",
    timestamps: false
  }
);
