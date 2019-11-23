const express = require("express");
const directorRoutes = express();
const Director = require("../models/director");

directorRoutes.get("/", function(request, response) {
  Director.findAll().then(directors => {
    response.json(directors);
  });
});

directorRoutes.get("/:id", function(request, response) {
  let { id } = request.params;

  Director.findByPk(id).then(director => {
    if (director) {
      response.json(director);
    } else {
      response.status(404).send("Director with id " + id + " not found.");
    }
  });
});

directorRoutes.post("/add", function(request, response) {
  Director.create({
    first_name: request.body.first_name,
    last_name: request.body.last_name,
    date_of_birth: request.body.date_of_birth,
    description: request.body.description
  })
    .then(director => {
      response.json(director);
    })
    .catch(err => {
      response.status(400).send("Adding new director failed");
    });
});

directorRoutes.put("/update/:id", function(request, response) {
  let { id } = request.params;
  Director.findByPk(id).then(director => {
    if (director) {
      director
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
        .then(director => {
          response.json(director);
        });
    } else
      response
        .status(404)
        .send("Director with id " + id + " is not found so cannot be updated.");
  });
});

directorRoutes.delete("/delete/:id", function(request, response) {
  let { id } = request.params;

  Director.findByPk(id).then(director => {
    if (director) {
      director.destroy().then(() => {
        response.status(204).send(); //204 for successful deleting
      });
    } else
      response
        .status(404)
        .send("Director with id " + id + " is not found so cannot be deleted.");
  });
});

module.exports = directorRoutes;
