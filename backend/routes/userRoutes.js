const express = require("express");
const userRoutes = express();
const User = require("../models/user");

userRoutes.get("/", function(request, response) {
  User.findAll().then(users => {
    response.json(users);
  });
});

userRoutes.get("/:id", function(request, response) {
  let { id } = request.params;

  User.findByPk(id).then(user => {
    if (user) {
      response.json(user);
    } else {
      response.status(404).send();
    }
  });
});

module.exports = userRoutes;
