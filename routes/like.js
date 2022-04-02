const express = require("express");
const router = express.Router();
const controller = require('../controllers/liking');

router.post('/', controller.like);

module.exports = router;