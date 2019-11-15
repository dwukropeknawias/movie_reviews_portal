const express = require("express");

const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

const userRoutes = require("./routes/userRoutes");
const actorRoutes = require("./routes/actorRoutes");
const directorRoutes = require("./routes/directorRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");
const movieRoutes = require("./routes/movieRoutes");
const photoRoutes = require("./routes/photoRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const roleRoutes = require("./routes/roleRoutes");

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

app.use("/api/users", userRoutes);
app.use("/api/actors", actorRoutes);
app.use("/api/directors", directorRoutes);
app.use("/api/feedbacks", feedbackRoutes);
app.use("/api/movies", movieRoutes);
app.use("/api/photos", photoRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/roles", roleRoutes);

app.listen(port, function() {
  console.log(`Listening at Port ${port}`);
});
