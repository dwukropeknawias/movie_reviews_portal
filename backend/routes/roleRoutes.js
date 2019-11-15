const express = require("express");
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
      response.status(404).send("Role with id " + id + " not found.");
    }
  });
});

roleRoutes.post("/add", function(request, response) {
  Role.create({
    actor_id: request.body.actor_id,
    movie_id: request.body.movie_id,
    description: request.body.description
  })
    .then(role => {
      response.json(role);
    })
    .catch(err => {
      res.status(400).send("Adding new role failed");
    });
});

roleRoutes.put("/update/:id", function(request, response) {
  let { id } = request.params;
  Role.findByPk(id).then(role => {
    if (role) {
      role
        .update(
          {
            actor_id: request.body.actor_id,
            movie_id: request.body.movie_id,
            description: request.body.description
          },
          {
            where: { id: request.params.id },
            returning: true,
            plain: true
          }
        )
        .then(role => {
          response.json(role);
        });
    } else
      response
        .status(404)
        .send("Role with id " + id + " is not found so cannot be updated.");
  });
});

roleRoutes.delete("/delete/:id", function(request, response) {
  let { id } = request.params;

  Role.findByPk(id).then(role => {
    if (role) {
      role.destroy().then(() => {
        response.status(204).send(); //204 for successful deleting
      });
    } else
      response
        .status(404)
        .send("Role with id " + id + " is not found so cannot be deleted.");
  });
});

module.exports = roleRoutes;
