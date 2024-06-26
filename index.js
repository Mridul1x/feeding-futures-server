require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

/*Routes*/
const userRoutes = require("./routes/user.route");
const reviewRoutes = require("./routes/review.route");
const providerRoutes = require("./routes/provider.route");
const consumerRoutes = require("./routes/consumer.route");
const checkpostRoutes = require("./routes/checkpost.route");

/*Express App*/
const app = express();

/*Middlewares*/
app.use(express.json());
app.use(
  cors({
    credentials: true,
  })
);

/*Test Api*/
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Feeding Futures server!" });
});

app.use("/api/users", userRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/providers", providerRoutes);
app.use("/api/consumers", consumerRoutes);
app.use("/api/checkpost", checkpostRoutes);

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
  .catch((err) => {
    console.log(err);
  });
