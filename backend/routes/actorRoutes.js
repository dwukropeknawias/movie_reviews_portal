const express = require("express");
const actorRoutes = express();
const Actor = require("../models/actor");

actorRoutes.get("/", function(request, response) {
  Actor.findAll().then(actors => {
    response.json(actors);
  });
});

actorRoutes.get("/:id", function(request, response) {
  let { id } = request.params;

  Actor.findByPk(id).then(actor => {
    if (actor) {
      response.json(actor);
    } else {
      response.status(404).send("Actor with id " + id + " not found.");
    }
  });
});

actorRoutes.post("/add", function(request, response) {
  Actor.create({
    first_name: request.body.first_name,
    last_name: request.body.last_name,
    date_of_birth: request.body.date_of_birth,
    description: request.body.description
  })
    .then(actor => {
      response.json(actor);
    })
    .catch(err => {
      response.status(400).send("Adding new actor failed");
    });
});

actorRoutes.patch("/update/:id", function(request, response) {
  let { id } = request.params;
  Actor.findByPk(id).then(actor => {
    if (actor) {
      actor
        .update(
          {
            first_name: request.body.first_name,
            last_name: request.body.last_name,
            date_of_birth: request.body.date_of_birth,
            description: request.body.description
          },
          {
            where: { id: request.params.id },
            returning: true,
            plain: true
          }
        )
        .then(actor => {
          response.json(actor);
        });
    } else
      response
        .status(404)
        .send("Actor with id " + id + " is not found so cannot be updated.");
  });
});

actorRoutes.delete("/delete/:id", function(request, response) {
  let { id } = request.params;

  Actor.findByPk(id).then(actor => {
    if (actor) {
      actor.destroy().then(() => {
        response.status(204).send(); //204 for successful deleting
      });
    } else
      response
        .status(404)
        .send("Actor with id " + id + " is not found so cannot be deleted.");
  });
});

module.exports = actorRoutes;
