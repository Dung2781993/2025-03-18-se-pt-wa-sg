const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/AuthController");

router.post("/login", AuthController.login);
router.post("/refresh", AuthController.refreshToken);
router.post("/logout", AuthController.logout);

module.exports = router;
