const express = require("express");

const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(bodyParser.json());

app.listen(port, function() {
  console.log(`Listening at Port ${port}`);
});
