const express = require("express");
const { isAuthenticated } = require("../middlewares/auth.middleware");
const { isProviderConnector } = require("../middlewares/provider.middlware");
const {
  createProvider,
  getAllProviders,
  createContribution,
  getAProvider,
} = require("../controllers/provider.controller");

const router = express.Router();

router.post("/", isAuthenticated, isProviderConnector, createProvider);
router.get("/", isAuthenticated, isProviderConnector, getAllProviders);
router.get("/:pid", isAuthenticated, isProviderConnector, getAProvider);
router.post("/:pid", isAuthenticated, isProviderConnector, createContribution);

module.exports = router;
