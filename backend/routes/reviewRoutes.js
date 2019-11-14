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
      response.status(404).send();
    }
  });
});

reviewRoutes.post("/postreq", function(request, response) {
  Review.create({
    description: request.body.description
  }).then(review => {
    response.json(review);
  });
});

reviewRoutes.delete("/:id", function(request, response) {
  let { id } = request.params;

  Review.findByPk(id).then(review => {
    review.destroy().then(() => {
      response.status(204).send();
    });
  });
});

module.exports = reviewRoutes;
