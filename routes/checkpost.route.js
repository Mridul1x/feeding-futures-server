const express = require("express");
const { isAuthenticated } = require("../middlewares/auth.middleware");
const { isAdmin } = require("../middlewares/admin.middleware");
const {
  createJoiningRequest,
  getAllReqs,
  getAReq,
} = require("../controllers/checkpost.controller");

const router = express.Router();

router.post("/", isAuthenticated, createJoiningRequest);
router.get("/", isAdmin, getAllReqs);
router.get("/:cid", isAdmin, getAReq);

module.exports = router;
