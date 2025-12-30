const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/auth.middleware");
const {
  getCurrentUser,
  updateProfile,
  changePassword,
} = require("../controllers/user.controller");

router.get("/me", authMiddleware, getCurrentUser);
router.put("/me", authMiddleware, updateProfile);
router.put("/me/password", authMiddleware, changePassword);

module.exports = router;
