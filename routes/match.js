const express = require("express");
const router = express.Router();
const controller = require('../controllers/match');



router.get('/', controller.matching);


module.exports = router;