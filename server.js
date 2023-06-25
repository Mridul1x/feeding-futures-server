require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

/*Routes*/
const userRoutes = require("./routes/user.route");
const reviewRoutes = require("./routes/review.route");
const providerRoutes = require("./routes/provider.route");

/*Express App*/
const app = express();

/*Middlewares*/
app.use(
  cors({
    credentials: true,
  })
);
app.use(express.json());

/*Test Api*/
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Feeding Futures server!" });
});

/*Bypassed Apis*/
app.use("./api/users", userRoutes);
app.use("./api/reviews", reviewRoutes);
app.use("./api/providers", providerRoutes);

/*Variables*/
const port = process.env.PORT || 8080;
const uri = process.env.MONGO_URI;

/*DB connection*/
mongoose
  .connect(uri, { useUnifiedTopology: true })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port : ${port}`);
    });
  })
  .catch(() => {
    console.log(err);
  });
