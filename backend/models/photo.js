const Sequelize = require("sequelize");
const sequelize = require("./../database/sequeliseConfig.js");

module.exports = sequelize.define(
  "photo",
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
    role_id: {
      type: Sequelize.INTEGER(10),
      allowNull: true
    },
    photo: {
      type: Sequelize.CHAR,
      allowNull: true
    }
  },
  {
    tableName: "photo",
    timestamps: false
  }
);
