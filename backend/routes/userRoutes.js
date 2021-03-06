const express = require("express");
const userRoutes = express();
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const secret = require("../secret");

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
            email: user.email,
            username: user.username
          };

          // Sign token
          jwt.sign(
            payload,
            secret.secretKey,
            {
              expiresIn: 36000 // 10 h
            },
            (err, token) => {
              response.json({
                token: token
              });
            }
          );
        } else {
          return response.status(400).send("Password incorrect");
        }
      });
    }
  });
});

userRoutes.get("/acc/:username", function(request, response) {
  let token = request.headers["authorization"] || " ";

  if (token.startsWith("Bearer ")) {
    // Remove Bearer from string, Postman has authentication as "bearer + token"
    token = token.slice(7, token.length);
  }
  jwt.verify(token, secret.secretKey, (err, payloadData) => {
    if (err) {
      response.sendStatus(403);
    } else {
      User.findOne({
        where: { username: request.params.username },
        attributes: ["username", "email", "first_name", "last_name", "avatar"]
      }).then(user => {
        if (user) {
          response.json(user);
        } else {
          response.status(404).send("User with that username is not found.");
        }
      });
    }
  });
});

userRoutes.patch("/update/:id", function(request, response) {
  let token = request.headers["authorization"] || " ";
  if (token.startsWith("Bearer ")) {
    token = token.slice(7, token.length);
  }
  jwt.verify(token, secret.secretKey, (err, payloadData) => {
    if (err) {
      response.sendStatus(403);
    } else {
      let { id } = request.params;
      if (payloadData.id != id) {
        response.sendStatus(403);
      } else {
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(request.body.newPassword, salt, (err, hash) => {
            User.findByPk(id).then(user => {
              if (user) {
                user
                  .update(
                    {
                      first_name: request.body.first_name,
                      last_name: request.body.last_name,
                      password: hash,
                      avatar: request.body.avatar
                    },
                    {
                      where: { id: request.params.id },
                      returning: true,
                      plain: true
                    }
                  )
                  .then(user => {
                    response.json(user);
                  });
              } else {
                response
                  .status(404)
                  .send(
                    "User with id " + id + " is not found so cannot be updated."
                  );
              }
            });
          });
        });
      }
    }
  });
});

module.exports = userRoutes;
