const express = require("express");
const photoRoutes = express();
const Photo = require("../models/photo");

photoRoutes.get("/", function(request, response) {
  Photo.findAll().then(photos => {
    response.json(photos);
  });
});

photoRoutes.get("/:id", function(request, response) {
  let { id } = request.params;

  Photo.findByPk(id).then(photo => {
    if (photo) {
      response.json(photo);
    } else {
      response.status(404).send("Photo with id " + id + " not found.");
    }
  });
});

photoRoutes.post("/add", function(request, response) {
  Photo.create({
    user_id: request.body.user_id,
    role_id: request.body.role_id,
    photo: request.body.photo
  })
    .then(photo => {
      response.json(photo);
    })
    .catch(err => {
      res.status(400).send("Adding new photo failed");
    });
});

photoRoutes.put("/update/:id", function(request, response) {
  let { id } = request.params;
  Photo.findByPk(id).then(photo => {
    if (photo) {
      photo
        .update(
          {
            user_id: request.body.user_id,
            role_id: request.body.role_id,
            photo: request.body.photo
          },
          {
            where: { id: request.params.id },
            returning: true,
            plain: true
          }
        )
        .then(photo => {
          response.json(photo);
        });
    } else
      response
        .status(404)
        .send("Photo with id " + id + " is not found so cannot be updated.");
  });
});

photoRoutes.delete("/delete/:id", function(request, response) {
  let { id } = request.params;

  Photo.findByPk(id).then(photo => {
    if (photo) {
      photo.destroy().then(() => {
        response.status(204).send(); //204 for successful deleting
      });
    } else
      response
        .status(404)
        .send("Photo with id " + id + " is not found so cannot be deleted.");
  });
});

module.exports = photoRoutes;
