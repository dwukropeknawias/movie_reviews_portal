const express = require("express");
const reviewRoutes = express();
const Review = require("../models/review");

reviewRoutes.get("/", function(request, response) {
  Review.findAll().then(reviews => {
    response.json(reviews);
  });
});

reviewRoutes.get("/:id", function(request, response) {
  let { id } = request.params;

  Review.findByPk(id).then(review => {
    if (review) {
      response.json(review);
    } else {
      response.status(404).send("Review with id " + id + " not found.");
    }
  });
});

reviewRoutes.post("/add", function(request, response) {
  Review.create({
    user_id: request.body.user_id,
    movie_id: request.body.movie_id,
    description: request.body.description,
    rating: request.body.rating
  })
    .then(review => {
      response.json(review);
    })
    .catch(err => {
      response.status(400).send("Adding new review failed");
    });
});

reviewRoutes.put("/update/:id", function(request, response) {
  let { id } = request.params;
  Review.findByPk(id).then(review => {
    if (review) {
      review
        .update(
          {
            user_id: request.body.user_id,
            movie_id: request.body.movie_id,
            description: request.body.description,
            rating: request.body.rating
          },
          {
            where: { id: request.params.id },
            returning: true,
            plain: true
          }
        )
        .then(review => {
          response.json(review);
        });
    } else
      response
        .status(404)
        .send("Review with id " + id + " is not found so cannot be updated.");
  });
});

reviewRoutes.delete("/delete/:id", function(request, response) {
  let { id } = request.params;

  Review.findByPk(id).then(review => {
    if (review) {
      review.destroy().then(() => {
        response.status(204).send(); //204 for successful deleting
      });
    } else
      response
        .status(404)
        .send("Review with id " + id + " is not found so cannot be deleted.");
  });
});

module.exports = reviewRoutes;
