/*const express = require("express");
const roleRoutes = express();
const Role = require("../models/role");

roleRoutes.get("/", function(request, response) {
  Role.findAll().then(roles => {
    response.json(roles);
  });
});

roleRoutes.get("/:id", function(request, response) {
  let { id } = request.params;

  Role.findByPk(id).then(role => {
    if (role) {
      response.json(role);
    } else {
      response.status(404).send();
    }
  });
});

roleRoutes.post("/add", function(request, response) {
  Role.create({
    description: request.body.description
  }).then(role => {
    response.json(role);
  });
});

roleRoutes.delete("/:id", function(request, response) {
  let { id } = request.params;

  Role.findByPk(id).then(role => {
    role.destroy().then(() => {
      response.status(204).send();
    });
  });
});

module.exports = roleRoutes;
*/
