const express = require("express");
const {
  loginUser,
  registerUser,
  getAllUser,
  getAnUser,
  updateUserRole,
} = require("../controllers/user.controller");

const { isAuthenticated } = require("../middlewares/auth.middleware");
const { isAdmin } = require("../middlewares/admin.middleware");

const router = express.Router();

router.post("/login", loginUser);
router.post("/rediter", registerUser);
router.get("/", isAuthenticated, isAdmin, getAllUser);
router.get("/:uid", isAuthenticated, getAnUser);
router.patch("/:uid", isAuthenticated, isAdmin, updateUserRole);

module.exports = router;
