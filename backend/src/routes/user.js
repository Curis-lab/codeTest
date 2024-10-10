const express = require("express");
const { getMe } = require("../controllers/user");
const authMiddleware = require("../middlewares/auth-middleware");
const router = express.Router();

router.get("/me", authMiddleware, getMe);

module.exports = router;
