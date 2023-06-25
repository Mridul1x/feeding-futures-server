const express = require("express");
const { isAuthenticated } = require("../middlewares/auth.middleware");
const { isAdmin } = require("../middlewares/admin.middleware");
const {
  createJoiningRequest,
  getAllReqs,
  getAReq,
} = require("../controllers/checkpost.controller");

const router = express.Router();

router.post("/", createJoiningRequest, isAuthenticated);
router.get("/", getAllReqs, isAdmin);
router.get("/:cid", getAReq, isAdmin);

module.exports = router;
