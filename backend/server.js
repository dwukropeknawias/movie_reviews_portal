const express = require("express");

const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

const userRoutes = require("./routes/userRoutes");

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

app.use("/api/users", userRoutes);

app.listen(port, function() {
  console.log(`Listening at Port ${port}`);
});
