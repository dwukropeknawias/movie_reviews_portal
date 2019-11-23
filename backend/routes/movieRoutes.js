const express = require("express");
const movieRoutes = express();
const Movie = require("../models/movie");

movieRoutes.get("/", function(request, response) {
  Movie.findAll().then(movies => {
    response.json(movies);
  });
});

movieRoutes.get("/:id", function(request, response) {
  let { id } = request.params;

  Movie.findByPk(id).then(movie => {
    if (movie) {
      response.json(movie);
    } else {
      response.status(404).send("Movie with id " + id + " not found.");
    }
  });
});

movieRoutes.post("/add", function(request, response) {
  Movie.create({
    title: request.body.title,
    year: request.body.year,
    runtime: request.body.runtime,
    genre: request.body.genre,
    plot: request.body.plot,
    awards: request.body.awards,
    revenue: request.body.revenue,
    production: request.body.production,
    poster: request.body.poster
  })
    .then(movie => {
      response.json(movie);
    })
    .catch(err => {
      response.status(400).send("Adding new movie failed");
    });
});

movieRoutes.put("/update/:id", function(request, response) {
  let { id } = request.params;
  Movie.findByPk(id).then(movie => {
    if (movie) {
      movie
        .update(
          {
            title: request.body.title,
            year: request.body.year,
            runtime: request.body.runtime,
            genre: request.body.genre,
            plot: request.body.plot,
            awards: request.body.awards,
            box_office: request.body.box_office,
            production: request.body.production,
            poster: request.body.poster
          },
          {
            where: { id: request.params.id },
            returning: true,
            plain: true
          }
        )
        .then(movie => {
          response.json(movie);
        });
    } else
      response
        .status(404)
        .send("Movie with id " + id + " is not found so cannot be updated.");
  });
});

movieRoutes.delete("/delete/:id", function(request, response) {
  let { id } = request.params;

  Movie.findByPk(id).then(movie => {
    if (movie) {
      movie.destroy().then(() => {
        response.status(204).send(); //204 for successful deleting
      });
    } else
      response
        .status(404)
        .send("Movie with id " + id + " is not found so cannot be deleted.");
  });
});

module.exports = movieRoutes;
