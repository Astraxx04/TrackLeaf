const { register, login } = require("../controllers/login");
const authMiddleware = require("../middlewares/auth");
const checkRoleMiddleware = require("../middlewares/checkRole");

const express = require('express');

const router = express.Router();

router.route("/login").post(login);
router.route("/register").post(authMiddleware, checkRoleMiddleware("admin"), register);

module.exports = router;