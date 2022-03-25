const express = require("express");
const router = express.Router();
const controller = require("../controllers/register");

router.get('/', controller.registreren);
router.post('/', controller.register);

module.exports = router;