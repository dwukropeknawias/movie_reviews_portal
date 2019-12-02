const express = require("express");
const feedbackRoutes = express();
const Feedback = require("../models/feedback");

feedbackRoutes.get("/", function(request, response) {
  Feedback.findAll().then(feedbacks => {
    response.json(feedbacks);
  });
});

feedbackRoutes.get("/:id", function(request, response) {
  let { id } = request.params;

  Feedback.findByPk(id).then(feedback => {
    if (feedback) {
      response.json(feedback);
    } else {
      response.status(404).send("Feedback with id " + id + " not found.");
    }
  });
});

feedbackRoutes.post("/add", function(request, response) {
  Feedback.create({
    user_id: request.body.user_id,
    review_id: request.body.review_id,
    description: request.body.description
  })
    .then(feedback => {
      response.json(feedback);
    })
    .catch(err => {
      response.status(400).send("Adding new feedback failed");
    });
});

feedbackRoutes.patch("/update/:id", function(request, response) {
  let { id } = request.params;
  Feedback.findByPk(id).then(feedback => {
    if (feedback) {
      feedback
        .update(
          {
            user_id: request.body.user_id,
            review_id: request.body.review_id,
            description: request.body.description
          },
          {
            where: { id: request.params.id },
            returning: true,
            plain: true
          }
        )
        .then(feedback => {
          response.json(feedback);
        });
    } else
      response
        .status(404)
        .send("Feedback with id " + id + " is not found so cannot be updated.");
  });
});

feedbackRoutes.delete("/delete/:id", function(request, response) {
  let { id } = request.params;

  Feedback.findByPk(id).then(feedback => {
    if (feedback) {
      feedback.destroy().then(() => {
        response.status(204).send(); //204 for successful deleting
      });
    } else
      response
        .status(404)
        .send("Feedback with id " + id + " is not found so cannot be deleted.");
  });
});

feedbackRoutes.get("/review/:id", function(request, response) {
  Feedback.findAll({
    where: { review_id: request.params.id }
  }).then(feedback => {
    if (feedback) {
      response.json(feedback);
    } else {
      response.status(404).send("Feedback with that movie_id is not found.");
    }
  });
});

module.exports = feedbackRoutes;
