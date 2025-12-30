const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/auth.middleware");
const requireRole = require("../middlewares/role.middleware");
const {
  getAllUsers,
  activateUser,
  deactivateUser,
} = require("../controllers/admin.controller");

router.get(
  "/users",
  authMiddleware,
  requireRole("admin"),
  getAllUsers
);

router.patch(
  "/users/:id/activate",
  authMiddleware,
  requireRole("admin"),
  activateUser
);

router.patch(
  "/users/:id/deactivate",
  authMiddleware,
  requireRole("admin"),
  deactivateUser
);

module.exports = router;
