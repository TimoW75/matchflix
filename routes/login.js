const express = require("express");
const router = express.Router();
const controller = require('../controllers/login');



router.get('/', controller.login);
router.post('/', controller.loggedIn);

module.exports = router;