const express = require("express");
const router = express.Router();

const { isAuthenticated } = require("../middlewares/auth.middleware");

const {
  getAllReviews,
  createReview,
} = require("../controllers/review.controller");

router.get("/", getAllReviews);

router.post("/", isAuthenticated, createReview);

module.exports = router;
