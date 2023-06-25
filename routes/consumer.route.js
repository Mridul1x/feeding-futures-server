const express = require("express");
const { isAuthenticated } = require("../middlewares/auth.middleware");
const { isConsumerConnector } = require("../middlewares/consumer.middleware");
const {
  createConsumer,
  getAllConsumers,
  getConsumer,
  createConsumption,
} = require("../controllers/consumer.controller");

const router = express.Router();

router.post("/", createConsumer, isConsumerConnector, isAuthenticated);
router.get("/", getAllConsumers, isConsumerConnector, isAuthenticated);
router.get("/:cid", getConsumer, isConsumerConnector, isAuthenticated);
router.post("/:cid", createConsumption, isConsumerConnector, isAuthenticated);

module.exports = router;
