const express = require("express");
const {
  getStaffInfo,
  getDepartmentStaff,
  getAllStaff,
} = require("../controllers/staff");
const authMiddleware = require("../middlewares/auth-middleware");
const router = express.Router();

// Get personal staff info (Standard user)
router.get("/me", authMiddleware, getStaffInfo);

// Get staff info from the same department (Manager)
router.get(
  "/department",
  authMiddleware,
  (req, res, next) => {
    // Assuming the role of the user is stored in the token (e.g., manager, super admin)
    if (req.user.role !== 2) {
      return res
        .status(403)
        .json({ error: "Access denied. Only managers can access this." });
    }
    next();
  },
  getDepartmentStaff
);

// Get all staff info (Super admin)
router.get(
  "/all",
  authMiddleware,
  (req, res, next) => {
    if (req.user.role !== 'super_admin') {
      return res
        .status(403)
        .json({ error: "Access denied. Only super admins can access this." });
    }
    next();
  },
  getAllStaff
);

module.exports = router;
