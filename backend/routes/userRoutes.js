const express = require("express");
const userRoutes = express();
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const secret = "mysecret";

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
      response.status(404).send("User with id " + id + " not found.");
    }
  });
});

userRoutes.post("/register", function(request, response) {
  User.findOne({ where: { email: request.body.email } }).then(user => {
    if (user) {
      response.status(404).send("User with that mail is already registrated.");
    } else {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(request.body.password, salt, (err, hash) => {
          User.create({
            username: request.body.username,
            email: request.body.email,
            password: hash,
            token: request.body.token,
            first_name: request.body.first_name,
            last_name: request.body.last_name,
            is_admin: false
          })
            .then(user => {
              response.json(user);
            })
            .catch(err => {
              response.status(400).send("Registration failed");
            });
        });
      });
    }
  });
});

userRoutes.post("/login", function(request, response) {
  User.findOne({ where: { email: request.body.email } }).then(user => {
    if (!user) {
      response.status(404).send("User with that mail is not found.");
    } else {
      bcrypt.compare(request.body.password, user.password).then(isMatch => {
        if (isMatch) {
          // User matched
          // Create JWT Payload
          const payload = {
            id: user.id,
            email: user.email
          };

          // Sign token
          jwt.sign(
            payload,
            secret,
            {
              expiresIn: 36000 // 10 h
            },
            (err, token) => {
              //  response.json({
              //    token: token
              //  });
              response
                .cookie("token", token, { httpOnly: true }) // jakocookie
                .sendStatus(200);
            }
          );
        } else {
          return response.status(400).send("Password incorrect");
        }
      });
    }
  });
});

module.exports = userRoutes;
