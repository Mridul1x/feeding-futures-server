// POST /api/providers => create a provider(auth, providerConnector)
// GET /api/providers => get all providers(auth, providerConnector)
// GET /api/providers/:pid => get a provider(auth, providerConnector)
// POST /api/providers/:pid => create contribution(auth, providerConnector)

const express = require("express");
const { isAuthenticated } = require("../middlewares/auth.middleware");
const { isProviderConnector } = require("../middlewares/provider.middlware");
const {
  createProvider,
  getAllProviders,
  createContribution,
  getProvider,
} = require("../controllers/provider.controller");

const router = express.Router();

router.post("/", isAuthenticated, isProviderConnector, createProvider);
router.get("/", isAuthenticated, isProviderConnector, getAllProviders);
router.get("/:pid", isAuthenticated, isProviderConnector, getProvider);
router.post("/:pid", isAuthenticated, isProviderConnector, createContribution);

module.exports = router;
