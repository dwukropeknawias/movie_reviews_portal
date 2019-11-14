const Sequelize = require("sequelize");
const sequelize = require("./../database/sequeliseConfig.js");

module.exports = sequelize.define(
  "user",
  {
    id: {
      type: Sequelize.INTEGER(10),
      primaryKey: true,
      allowNull: false
    },
    username: {
      type: Sequelize.CHAR(40),
      allowNull: false
    },
    email: {
      type: Sequelize.CHAR(40),
      allowNull: true
    },
    password: {
      type: Sequelize.CHAR(40),
      allowNull: false
    },
    token: {
      type: Sequelize.CHAR(255),
      allowNull: true
    },
    first_name: {
      type: Sequelize.CHAR(40),
      allowNull: true
    },
    last_name: {
      type: Sequelize.CHAR(40),
      allowNull: true
    },
    is_admin: {
      type: Sequelize.BOOLEAN,
      allowNull: true
    }
  },
  {
    tableName: "users",
    timestamps: false
  }
);

/*
  User.associate = models => {
    User.belongsToMany(models.Movie, {
      through: models.Review,
      foreignKey: "user_id"
    });
  };


*/
