const express = require("express");
const router = express.Router();
const controller = require("../controllers/logout");

router.post('/', controller.logoutFunction);

module.exports = router;