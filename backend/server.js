const express = require("express");

const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

const User = require("./models/user");

//import models from "./models";

app.get("/api/users", function(request, response) {
  User.findAll().then(users => {
    response.json(users);
  });
});

app.get("/api/users/:id", function(request, response) {
  let { id } = request.params;

  User.findByPk(id).then(user => {
    if (user) {
      response.json(user);
    } else {
      response.status(404).send();
    }
  });
});

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

app.listen(port, function() {
  console.log(`Listening at Port ${port}`);
});
