const {  } = require("../controllers/qrGenerator");
const authMiddleware = require("../middlewares/auth");
const checkRoleMiddleware = require("../middlewares/checkRole");

const express = require('express');

const router = express.Router();

router.route("/create").post();

module.exports = router;